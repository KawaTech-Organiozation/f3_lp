import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes"; // Assuming shared export matches
import { useToast } from "@/hooks/use-toast";

// Since schemas are defined in context, I will mock the API usage based on common patterns
// However, the prompt provided specific schema context.

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      // In a real scenario, we use api.leads.create.path
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit lead");
      }
      
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem Enviada!",
        description: "Nossa equipe entrará em contato em breve.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erro ao enviar",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
