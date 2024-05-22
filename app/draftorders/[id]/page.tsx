import { createClient } from "@/app/utils/supabase/server";
import { cookies } from 'next/headers';
import { DraftOrder } from "@/app/utils/class/interfaces";
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'; // Adjust this import based on your setup

export default async function Page({ params }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: draftOrders, error } = await supabase
        .from("draftorder")
        .select("*")
        .eq("customerid", params.id);

    //const {data : Orders , e} = await supabase.from("order_tabel").select("*").eq()

    if (error) {
        console.error(error);
        return <div>Error loading draft orders</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {draftOrders?.map((order: DraftOrder) => (
                    <Card key={order.id} className="shadow-md rounded-lg border border-gray-200">
                        <CardHeader>
                            <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-1">
                                <span className="font-semibold">Customer ID:</span> {order.customerid}
                            </p>
                            <p className="text-gray-700 mb-4"><span className="font-semibold">Note:</span>{order.notes}
                            </p>
                        </CardContent>
                        <CardFooter className="text-gray-600">
                            <p className="mb-1">
                                <span className="font-semibold">Created Date:</span> {new Date(order.createddate).toLocaleDateString()}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">To Be Given:</span> {new Date(order.tobegiven).toLocaleDateString()}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Delivery Date:</span> {new Date(order.deliverydate).toLocaleDateString()}
                            </p>
                            <p className="mb-1">
                                <span className="font-semibold">Is Confirmed:</span> {order.isconfirmed ? 'Yes' : 'No'}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
