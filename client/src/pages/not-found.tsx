import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl border-border/50">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 text-red-500 font-bold text-2xl items-center justify-center">
            <AlertCircle className="h-8 w-8" />
            <h1>404 Página Não Encontrada</h1>
          </div>

          <p className="mt-4 text-center text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>

          <div className="flex justify-center">
             <Link href="/">
               <Button className="bg-primary hover:bg-primary/90">Voltar para Início</Button>
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
