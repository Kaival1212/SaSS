import {createClient} from "@/app/utils/supabase/server";
import { cookies } from 'next/headers'
import {Customer} from "@/app/utils/class/interfaces";

export default async function Home() {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  const {data: customers,error } = await supabase.from("customers").select("*")

  return (
    <main>
      {customers && customers.map((user:Customer) => (
          <div key={user.id}>
            {user.email}
          </div>
      ))}
    </main>
  );
}
