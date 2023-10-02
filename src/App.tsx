import { useState } from "react"

const App = () => {

  const [checked, setChecked] = useState<boolean>(false)
  return (
    <div className="bg-gray-400 w-full h-screen flex items-center justify-center">
      <div className="min-w-[200px] min-h-[200px] rounded-lg bg-white flex justify-center items-center">
        <div className="flex flex-col">
          <input type="checkbox" onClick={(e:any) => {
            setChecked(e.target.checked)
          }}/>
          <button className={`mt-4 px-7 py-3 transition-all duration-500 ${checked? "bg-purple-400" : "bg-gray-300"} text-white font-semibold  rounded-xl`} disabled={!checked} onClick={() => {
            alert("Bulolu Puff am, Bulolu Pass am, E done Burst E done cast")
          }}>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default App