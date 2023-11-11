import Button from "../Components/Button"

const RequestSection = () => {  return (
    <section className="flex items-center justify-center flex-col">
        <section className="inline-grid grid-cols-3 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1 text-white py-16 place-content-center justify-center items-center">
          <div className="flex justify-center items-center flex-col gap-8">
            <h3 className="text-3xl">STEP 1</h3>
            <p>
              <p className="text-2xl">Complete the application</p>
              <p className="text-md">it only takes a few minutes</p>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-8">
            <h3 className="text-3xl">STEP 2</h3>
            <p>
              <p className="text-2xl">Fund Your Account</p>
              <p className="text-md">Connect your bank or transfer an account</p>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-8">
            <h3 className="text-3xl">STEP 3</h3>
            <p>
              <p className="text-2xl">Get Started Trading</p>
              <p className="text-md">Take your investing to the next level</p>
            </p>
          </div>
      </section>
      <Button label={"Register Now"} bg_color={"bg-white"} text_color={"text-red-600"}/>
    </section>
  )
}

export default RequestSection