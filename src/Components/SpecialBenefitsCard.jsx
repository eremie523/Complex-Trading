const SpecialBenefitsCard = ({data}) => {
  return (
    <div className="flex flex-col gap-4 bg-blue-100 p-4 rounded-xl shadow-xl justify-start items-center">
        <div>
            <img src={data.imgURL} alt={data.label} width={50} height={50} />
        </div>
        <div className="font-bold font-palanquin text-gray-500">
            <h1 className="text-xl py-2 underline">{data.label}</h1>
            <p>{data.body}</p>
        </div>
    </div>
  )
}

export default SpecialBenefitsCard