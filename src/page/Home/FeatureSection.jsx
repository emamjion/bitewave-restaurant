import { Button } from "@/components/ui/button";

const FeatureSection = () => {
    const items = [
        {
            icon: 'https://i.ibb.co/5sdGKzS/1.png',
            title: '100% Swiss Quality',
            description: 'Experience unmatched excellence with our products, crafted to Swiss standards for superior quality, precision, and reliability.'
        },
        {
            icon: 'https://i.ibb.co/r0j3Tr2/2.png',
            title: 'Organic Production',
            description: 'Our organically produced products are grown sustainably without chemicals, ensuring natural purity and exceptional quality.'
        },
        {
            icon: 'https://i.ibb.co/4Mjx9WH/3.png',
            title: 'Food Law Certified',
            description: 'Our Food Law Certified products meet strict safety and quality standards, ensuring your peace of mind.'
        },
        {
            icon: 'https://i.ibb.co/bmyz40H/4.png',
            title: 'Food Production',
            description: 'Our food production ensures quality, safety, and sustainability, delivering fresh, nutritious, and delicious products you trust.'
        },
    ]
    
    return (
        <section className='py-8 xl:py-12'>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className="border border-[#ddd] p-2.5 text-center rounded hover:border-none hover:shadow-xl duration-500">
                                <div className="w-[85px] h-[85px] mx-auto">
                                    <img src={item.icon} alt="" className="max-w-full" />
                                </div>
                                <div className="mt-6 px-5 pb-5">
                                    <h1 className="font-medium text-[20px] mb-2.5">{item.title}</h1>
                                    <p className="text-[#666] mb-[15px]">{item.description}</p>
                                    <div>
                                        <Button variant='outline'>Discover More</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default FeatureSection;