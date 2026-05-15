import buss from '../assets/business.jpg'

const FlexibleRepayment = () => {
  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="relative rounded-[80px] bg-cover bg-center bg-no-repeat bg-[url('../assets/business.jpg')]" style={{ backgroundImage: `url(${buss})` }}>
  <div className="absolute inset-0 bg-black/80 rounded-[80px]"></div>

  <div className="relative z-10 py-25 mx-auto text-center text-white">
   <h2 className=" mb-10 font-semibold text-[30px] leading-none tracking-normal text-center">FLEXIBLE REPAYMENT</h2>
   <ul className="gap-7 list-disc list-inside font-normal text-sm leading-[23px] tracking-normal text-center">
    <li className='mb-[30px]'>6 months maximum tenure</li>
    <li className='mb-[30px]'>Weekly or monthly repayment according to your income pattern</li>
    <li className='mb-[30px]'   >No hidden charges</li>
   </ul>
   
  </div>
</div>
     </div>
  )
}

export default FlexibleRepayment