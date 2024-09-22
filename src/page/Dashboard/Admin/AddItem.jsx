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
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import Swal from "sweetalert2";
import useAxiosPublic from '../../../hooks/useAxiosPublic';

// Image hosting
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    // react hook form
    const { register, handleSubmit, reset, watch, setValue } = useForm();
    
    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });

        if(res.data.success){
            // Send the menu data to the server with the image url
            const menuData = {
                name: data.name,
                price : parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url
            };
            // send the data using axiossecure
            const menuDataResponse = await axiosSecure.post('/menu', menuData);
            if(menuDataResponse.data.insertedId){
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} to added the menu`,
                showConfirmButton: false,
                timer: 1500
                });
                reset();
            }
        }


    }

    // for select
    const selectedCategory = watch('category');
    
    
    return (
        <div className="max-w-xl mx-auto mt-12">
            <div className="text-center mb-10">
                <h3 className="text-[#cc3333] text-lg font-semibold mb-1">What's New?</h3>
                <h1 className="text-4xl font-bold text-gray-800">Add a New Item</h1>
            </div>
            <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Item Name */}
                    <div className="mb-8">
                        <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="itemName">
                            Item Name
                        </label>
                        <Input 
                            id="itemName" 
                            placeholder="Enter item name" 
                            className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all"
                            {...register('name', {required: true})}
                        />
                    </div>
                    {/* Category & Price */}
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="w-full">
                            <label className="block text-xl font-medium text-gray-700 mb-3" htmlFor="category">
                                Category
                            </label>
                            <Select 
                                value={selectedCategory}
                                onValueChange={(value) => setValue('category',value)}
                            >
                                <SelectTrigger className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#cc3333] focus:outline-none transition-all">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="rounded-lg border border-gray-300">
                                    <SelectItem value="pizza">Pizza</SelectItem>
                                    <SelectItem value="asian">Asian</SelectItem>
                                    <SelectItem value="burger">Burger</SelectItem>
                                    <SelectItem value="salad">Salad</SelectItem>
                                    <SelectItem value="bakery">Bakery</SelectItem>
                                    <SelectItem value="drinks">Drinks</SelectItem>
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
                                {...register('price', {required: true})}
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
                            {...register('recipe', {required: true})}
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
                            {...register('image', {required: true})}
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
