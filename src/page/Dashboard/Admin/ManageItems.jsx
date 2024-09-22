import MenuTable from "@/components/MenuTable";
import useMenu from "@/hooks/useMenu";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    return (
        <section className="w-full">
            <div className="mb-12">
                <h1 className="text-xl font-semibold">Manage All Items</h1>
            </div>
            {/* Menu table */}
            <div>
                <MenuTable menu={menu} refetch={refetch} />
            </div>
        </section>
    );
};

export default ManageItems;