  import {createClient} from "@/app/utils/supabase/server";
  import { cookies } from 'next/headers'
  import {Order} from "@/app/utils/class/interfaces"
  export default async function Home() {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

    const {data: orders,error } = await supabase.from("order_table").select("*")

    return (
      <main>
        {orders && orders.map((order:Order) => (
            <div key={order.finalprice}>
              {order.finalprice}
            </div>
        ))}
      </main>
    );
  }
