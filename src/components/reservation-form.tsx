"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { toast } from "sonner";
import { CalendarIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  reservationSchema,
  type ReservationInput,
  TIME_SLOTS,
  GUEST_OPTIONS,
} from "@/lib/reservation-schema";
import { submitReservation } from "@/app/prenotazioni/actions";

const defaultValues: ReservationInput = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  notes: "",
};

export function ReservationForm() {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReservationInput>({
    resolver: zodResolver(reservationSchema),
    defaultValues,
  });

  const onSubmit = async (data: ReservationInput) => {
    const result = await submitReservation(data);
    if (result.success) {
      toast.success("Prenotazione inviata", {
        description: "Ti confermeremo la disponibilità entro poche ore.",
      });
      reset();
    } else {
      toast.error("Non siamo riusciti a inviare la richiesta", {
        description: result.error,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome e cognome</Label>
          <Input
            id="name"
            placeholder="Mario Rossi"
            aria-invalid={!!errors.name}
            className="h-11"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefono</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+39 333 1234567"
            aria-invalid={!!errors.phone}
            className="h-11"
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="mario.rossi@email.it"
          aria-invalid={!!errors.email}
          className="h-11"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        ) : null}
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="space-y-2">
          <Label>Data</Label>
          <Controller
            control={control}
            name="date"
            render={({ field }) => {
              const selected = field.value ? new Date(field.value) : undefined;
              return (
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger
                    render={
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "h-11 w-full justify-start gap-2 px-3 font-normal",
                          !selected && "text-muted-foreground"
                        )}
                      />
                    }
                  >
                    <CalendarIcon className="size-4" />
                    {selected
                      ? format(selected, "d MMMM yyyy", { locale: it })
                      : "Scegli una data"}
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      locale={it}
                      selected={selected}
                      onSelect={(d) => {
                        field.onChange(d ? format(d, "yyyy-MM-dd") : "");
                        setDatePickerOpen(false);
                      }}
                      disabled={{ before: new Date() }}
                      autoFocus
                    />
                  </PopoverContent>
                </Popover>
              );
            }}
          />
          {errors.date ? (
            <p className="text-xs text-destructive">{errors.date.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label>Orario</Label>
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Scegli un orario" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.time ? (
            <p className="text-xs text-destructive">{errors.time.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label>Ospiti</Label>
          <Controller
            control={control}
            name="guests"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Numero" />
                </SelectTrigger>
                <SelectContent>
                  {GUEST_OPTIONS.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g} {g === "1" ? "persona" : "persone"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.guests ? (
            <p className="text-xs text-destructive">{errors.guests.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Richieste particolari (opzionale)</Label>
        <Textarea
          id="notes"
          placeholder="Allergie, intolleranze, occasioni speciali…"
          rows={4}
          {...register("notes")}
        />
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full gap-2 rounded-full text-[0.95rem] sm:w-auto sm:px-10"
        >
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? "Invio in corso…" : "Invia la richiesta"}
        </Button>
        <p className="mt-4 text-xs text-foam/40">
          Confermiamo la disponibilità via email o telefono entro poche ore.
          Per gruppi superiori a 8 persone, chiamateci direttamente.
        </p>
      </div>
    </form>
  );
}
