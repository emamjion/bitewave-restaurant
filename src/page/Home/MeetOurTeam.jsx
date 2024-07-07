import './../../styles/MeetOurTeam.css';

const MeetOurTeam = () => {
    const members = [
        {
            image : 'https://i.ibb.co/NSCJ8kg/team-1.png',
            name: 'Porshiya Khan',
            position: 'Chief Executive',
            description: 'Experienced leader with a passion for innovation and excellence in business management. Driving our team towards success.'
        },
        {
            image : 'https://i.ibb.co/WFgWq5P/team-2.png',
            name: 'Ibrahim Khan',
            position: 'Executive',
            description: 'Experienced leader with a passion for innovation and excellence in business management. Driving our team towards success.'
        },
        {
            image : 'https://i.ibb.co/wM6rQRV/team-3.png',
            name: 'Khalid Saifullah',
            position: 'Food Inspector',
            description: 'Experienced leader with a passion for innovation and excellence in business management. Driving our team towards success.'
        },
    ]
    
    return (
        <section className='py-8 xl:py-[105px] container mx-auto'>
            <div className="flex items-center flex-col">
                <h4 className='text-[20px] font-semibold text-accent mb-1.5'>Our Team</h4>
                <h1 className='text-[28px] lg:text-[36px] font-semibold text-[#292929]'>Meet Our Team</h1>
            </div>
            <div className="flex items-center flex-col lg:flex-row flex-wrap gap-[30px] mt-5">
                {
                    members.map((member, index) => {
                        return (
                            <div key={index} className="main-cont">
                                <div className="img-cont">
                                    <img src={member.image} alt="" />
                                </div>
                                <div className=" text-cont text-center py-5 px-4 shadow-md bg-white">
                                    <h1 className="text-xl font-semibold pb-2">{member.name}</h1>
                                    <p className="text-[#666]">{member.position}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default MeetOurTeam;