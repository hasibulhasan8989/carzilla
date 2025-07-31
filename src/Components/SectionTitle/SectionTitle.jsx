

const SectionTitle = ({title,description}) => {
    return (
        <div className='my-12 lg:my-20 text-center'>
          <h1 className='text-[#333] font-bold text-3xl mb-2'>{title}</h1> 
          <p className='max-w-xl mx-auto'>{description}</p>
        </div>
    );
};

export default SectionTitle;