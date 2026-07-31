"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitContactMessage } from "@/app/contatti/actions";

const defaultValues: ContactInput = { name: "", email: "", message: "" };

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactInput) => {
    const result = await submitContactMessage(data);
    if (result.success) {
      toast.success("Messaggio inviato", {
        description: "Ti risponderemo il prima possibile.",
      });
      reset();
    } else {
      toast.error("Non siamo riusciti a inviare il messaggio", {
        description: result.error,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nome</Label>
          <Input
            id="contact-name"
            placeholder="Il tuo nome"
            aria-invalid={!!errors.name}
            className="h-11"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="tu@email.it"
            aria-invalid={!!errors.email}
            className="h-11"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Messaggio</Label>
        <Textarea
          id="contact-message"
          placeholder="Scrivi qui la tua richiesta: eventi privati, cene aziendali, informazioni..."
          rows={5}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 gap-2 rounded-full px-8 text-[0.95rem]"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
        {isSubmitting ? "Invio in corso…" : "Invia messaggio"}
      </Button>
    </form>
  );
}
