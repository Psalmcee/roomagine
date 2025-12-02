import { Palette, UserCircle } from "lucide-react"
import { useState } from "react"
import { User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Navbar() {
      const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
      const [user, setUser] = useState<User | null>( null);
    return (
        <div>
            <div className="relative flex items-center p-4 justify-between z-20">
              <Link href="/" className="flex items-center gap-2 z-10 px-4 py-2 text-white hover:bg-white/10 hover:rounded-md hover:cursor-pointer transition-colors">
                <span className="flex items-center gap-2">
                  <Palette className="h-8 w-8 text-white transition-transform group-hover:rotate-12" />
                  <span className="text-2xl font-bold text-white">Roomagine</span>
                </span>
              </Link>
            <div className=" z-10">
              {user ? (
                <button
                  onClick={() => supabase.auth.signOut()}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <UserCircle size={20} />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
                >
                  <UserCircle size={20} />
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
    )
}



export function NavbarWithBgColor() {
      const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
      const [user, setUser] = useState<User | null>( null);
    return (
      <div>
        <div className="relative flex bg-indigo-950 items-center p-4 mb-6 justify-between z-20">
          <Link
            href="/"
            className="flex items-center gap-2 z-10 px-4 py-2 text-white hover:bg-white/10 hover:rounded-md hover:cursor-pointer transition-colors"
          >
            <span className="flex items-center gap-2">
              <Palette className="h-8 w-8 text-white transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold text-white">Roomagine</span>
            </span>
          </Link>
          <div className=" z-10">
            {user ? (
              <button
                onClick={() => supabase.auth.signOut()}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                <UserCircle size={20} />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors"
              >
                <UserCircle size={20} />
                <span>Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
}