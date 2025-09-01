import NumberTicker from "../ui/number-ticker"

function StatusCardV1() {
  return (
    <section className=" bg-blue-50 dark:bg-black sm:py-32 lg:py-32 py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">Our Numbers Tell the Story</h2>
            <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">We’ve been building success for businesses like yours with passion and dedication. Here’s how we’ve made an impact:</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">  <NumberTicker value={6}/> + </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-white">Years in Business</p>
                <p className="text-base mt-0.5 text-gray-500">Creating success, one project at a time.                </p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> <NumberTicker value={100}/>  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-white">Projects Delivered</p>
                <p className="text-base mt-0.5 text-gray-500">Helping clients grow for the past 6 years.</p>
            </div>

            <div>
                <h3 className="font-bold text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> <NumberTicker value={5}/>  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900 dark:text-white">Team Members</p>
                <p className="text-base mt-0.5 text-gray-500">A small but mighty team working for your success.</p>
            </div>
        </div>
    </div>
</section>

  )
}

export default StatusCardV1