

export default function Page(){
    async function submitForm(formData){
        "use server";
        const formFields = {
            email: formData.get("email"),
            message: formData.get("message")
        }
        console.log("formFields", formFields);
        console.log("TODO: Send these form values to backend")
    }

    return(
    <main className="max-w-md mx-auto p-6 bg-white dark:bg-gray-600 shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form className="space-y-4" action={submitForm}>
            <div>
                <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email"
                    required
                    className="border-1 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    autoComplete="email"/>
                <div>
                    <label htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-white">
                        Message
                    </label>
                    <textarea id="message" required name="message" rows={4} className="border-1 border-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
                    Send Message
                </button>
            </div>
        </form>
        <ul className="p-3">
            <li>Phone: 888-555-5555</li>
            <li>Email: contact@us.com</li>
        </ul>
    </main>
    )
}