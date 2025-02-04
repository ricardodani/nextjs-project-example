"use client"

import { Image, UserPen, Users } from "lucide-react"
import Link from "next/link"
import Logo from "./logo";

export default function LoggedOffPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <Logo className="mx-auto h-24 w-24" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Bem vindo a nossarede.org
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Conecte, compartilhe, converse, crie e participe de comunidades...
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<UserPen className="h-6 w-6" />}
              title="Crie um perfil e fique atualizado"
              description="Veja fotos, vídeos e postagens dos seus amigos e de pessoas públicas com interesses em comum."
            />
            <FeatureCard
              icon={<Image className="h-6 w-6" />}
              title="Participe de Comunidades"
              description="Crie tópicos, participe de conversas e fique antenado em eventos."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Faça Amigos e comunique-se"
              description="Siga amigos, família e pessoas interessantes para crescer sua rede."
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="mr-4">
            <Link href="/signup" className="font-bold">Sign Up</Link>
          </button>
          <button onClick={onLogin} className="mr-4 bg-red-600 px-3 py-3 rounded text-slate-100 font-bold">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">{icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  )
}
