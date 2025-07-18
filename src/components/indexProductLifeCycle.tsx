import productLifeImg from '../assets/life-cycle-1.svg';


const ProductLifeCycle = () => {
    return (
        <section
            className="relative min-h-screen/30 p-6 md:py-10 lg:py-12 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <h2 className="text-black text-[24px] md:text-4xl lg:text-5xl font-medium ">
                        End-to-End Product <br/>Development Lifecycle
                    </h2>
                </div>
                <div className="relative w-full">
                    <img src={productLifeImg} alt="Product Life Cycle" className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    );
};

//hello
export default ProductLifeCycle;
