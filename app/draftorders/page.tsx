import {createClient} from "@/app/utils/supabase/server";
import { cookies } from 'next/headers'
import {DraftOrder} from "@/app/utils/class/interfaces"
export default async function Home() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

  const {data: orders,error } = await supabase.from("draftorder").select("*")

  return (
      <main>
        {orders && orders.map((order:DraftOrder) => (
            <div key={order.notes}>
              {order.notes}
            </div>
        ))}
      </main>
  );
}
