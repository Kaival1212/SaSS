import {createClient} from "@/app/utils/supabase/server";
import { cookies } from 'next/headers'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

interface Customer {
  id : string,
  email: string,
  contactnumber : string
}
export default async function Home() {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  const {data: customers,error } = await supabase.from("customers").select("*")

  return (
    <main>
      <div className={"grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
      {customers && customers.map((user:Customer) => (
          <Link href={`/draftorders/${user.id}`} key={user.id}>
          <Card  className={"hover:scale-105 hover:shadow-xl cursor-pointer"}>
            <CardHeader>
            <CardTitle>
              {user.email}
            </CardTitle>
            </CardHeader>
            <CardContent>
              {user.contactnumber}
            </CardContent>
            <CardFooter>
              {user.id}
            </CardFooter>
          </Card>
          </Link>
      ))}
      </div>
    </main>
  );
}
