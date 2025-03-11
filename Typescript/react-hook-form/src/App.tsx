import { useForm} from 'react-hook-form'


enum SourceEnum {
  Doctor = "Doctor",
  Engineer = "Engineer",
  Gamer = "Gamer",
}

interface formData {
  email: string,
  password: string,
  remember: boolean,
  source:SourceEnum,
}

function App() {
const {register, handleSubmit,formState: { errors }} = useForm<formData>({mode:"onChange"})

const onSubmit = handleSubmit (({email,password,remember,source}) => {
  console.log(email,password,remember,source);
}
)

  return (<div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12">
    {/* Header Section */}
    <div className="max-w-md w-full text-center font-medium text-gray-900">
      <div className="text-xl font-medium text-gray-900">
        React-Hook-Form
        <div className="text-3xl font-bold text-gray-900 mt-3">
          Login
        </div>
      </div>
    </div>
  
    {/* Form Container */}
    <div className="max-w-md w-full mx-auto mt-6 p-8 bg-white border border-gray-300 shadow-lg rounded-lg">
      <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div>
          <label className="text-sm font-bold text-gray-600 block">Email</label>
          <input
          {...register("email",{
            required: true,
            pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            }
          )}
            type="text" 

            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            style={{borderColor: errors.email? "red": ''}}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">Correct email format is required</p>}
          
        </div>
  
        {/* Password Field */}
        <div>
          <label className="text-sm font-bold text-gray-600 block">Password</label>
          <input 
         {...register("password",{
          required: true,
          minLength: 6,
          maxLength:20
          }
        )}
        type="password" 
        className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">Password should be greater then 8 characters</p>}
        </div>
  
        {/* Source Selection */}
        <div>
          <label className="text-sm font-bold text-gray-600 block">Source</label>
          <select 
          {...register("source")}
          name='source' 
            className="w-full border border-gray-300 rounded mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Gamer">Gamer</option>
          </select>
        </div>
  
        {/* Remember Me & Forgot Password */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <input 
            {...register("remember")}
          name='remember' 
              type="checkbox" 
              className="h-4 w-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label className="ml-2 text-sm text-gray-600">Remember Me</label>
          </div>
          <a href="#" className="font-medium text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
  
        {/* Submit Button */}
        <div>
          <button 
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default App
