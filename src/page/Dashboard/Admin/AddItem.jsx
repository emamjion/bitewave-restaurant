import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ImSpoonKnife } from "react-icons/im";

const AddItem = () => {
    return (
        <div className="max-w-xl mx-auto mt-12">
            <div className="text-center mb-10">
                <h3 className="text-[#cc3333] text-lg font-semibold mb-1">What's New?</h3>
                <h1 className="text-4xl font-bold text-gray-800">Add a New Item</h1>
            </div>
            <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
                <form>
                    {/* Item Name */}
                    <div className="mb-8">
                        <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="itemName">
                            Item Name
                        </label>
                        <Input 
                            id="itemName" 
                            placeholder="Enter item name" 
                            className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all"
                        />
                    </div>
                    {/* Category & Price */}
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="w-full">
                            <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="category">
                                Category
                            </label>
                            <Select>
                                <SelectTrigger className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg border border-gray-300">
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full">
                            <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="price">
                                Price
                            </label>
                            <Input 
                                id="price" 
                                placeholder="Enter price" 
                                className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all"
                            />
                        </div>
                    </div>
                    {/* Item Details */}
                    <div className="mb-8">
                        <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="itemDetails">
                            Item Details
                        </label>
                        <Textarea 
                            id="itemDetails" 
                            placeholder="Enter item details" 
                            className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all"
                        />
                    </div>
                    {/* Image Upload */}
                    <div className="mb-8">
                        <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="image">
                            Upload Image
                        </label>
                        <Input 
                            type="file" 
                            id="image" 
                            className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all"
                        />
                    </div>
                    {/* Button */}
                    <div className="mt-8 flex justify-center">
                        <Button className="flex items-center gap-3 text-lg font-semibold py-3 px-6 bg-[#cc3333] text-white rounded-full hover:bg-[#b82e2e] transition-all shadow-lg transform hover:scale-105">
                            Add Item
                            <ImSpoonKnife />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
