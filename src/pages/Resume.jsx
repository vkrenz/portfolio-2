import data from '../data'

import { useDarkMode } from '../DarkModeContext';

const Resume = () => {
    return (
        <div className="mx-auto">
            <div className="text-center mb-10 bg-white rounded-3xl p-10">
                <h1 className="text-4xl font-semibold">VICTOR KRENZEL</h1>
                {/* Divider */}
                <hr className="border-t-2 border-gray-300 my-10" />
                <div className="flex justify-center items-center">
                    <p className="text-lg">Toronto, ON M2R</p>
                    <p className="mx-2">|</p>
                    <p>+1 (647) 568-6382</p>
                    <p className="mx-2">|</p>
                    <a href="mail:vkrenzel@outlook.com" className="text-blue-500 underline ms-2">
                        vkrenzel@outlook.com
                    </a>
                    <p className="mx-2">|</p>
                    <a href="https://linkedin.com/in/vkrenz" className="text-blue-500 underline ms-2">
                        linkedin.com/in/vkrenz
                    </a>
                </div>
            </div>

            {/* Education Section */}
            <section className="mb-10 p-10 rounded-3xl bg-white">
                <h2 className="text-2xl font-semibold mb-4 text-center">EDUCATION</h2>
                    <div className="mb-6 flex items-center justify-between">
                        <p className="font-semibold">Ontario College Diploma, Computer Programming | <span className="font-regular opacity-50">Seneca College, Toronto ON</span></p>
                        <p><span className="italic">12/2023</span></p>
                    </div>
                <div>
                    <div className=" flex items-center justify-between">
                        <p className="font-semibold">CyberArts, Ontario High School Diploma | <span className="font-regular opacity-50">Northview Heights Secondary School, Toronto ON</span></p>
                        <p><span className="italic">06/2017</span></p>
                    </div>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-10 p-10 rounded-3xl bg-white">
                <h2 className="text-2xl font-semibold mb-4">TECHNICAL SKILLS</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Java, Python, C/C++, C#</li>
                    <li><strong>Frameworks & Libraries:</strong> React, Angular, Node.js, Next.js, Express.js, JQuery, Tailwind CSS, Bootstrap</li>
                    <li><strong>Database Management:</strong> Oracle SQL, MySQL, MongoDB, Firebase</li>
                    <li><strong>Data Formats:</strong> JSON, XML, CSV</li>
                    <li><strong>Version Control Systems:</strong> Git, Github</li>
                </ul>
            </section>

            {/* Work Experience Section */}
            <section className="mb-10 p-10 rounded-3xl bg-white">
                <h2 className="text-2xl font-semibold mb-4">WORK EXPERIENCE</h2>
                <div className="mb-6">
                    <p className="font-bold">Customer Experience Associate</p>
                    <p>Scotiabank, Toronto, ON | <span className="italic">04/2020 – Present</span></p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Managed customer inquiries and concerns with professionalism and empathy.</li>
                        <li>Handled cash transactions such as deposits, withdrawals, and payments, ensuring accuracy and efficiency.</li>
                        <li>Balanced the cash drawer daily, reconciling discrepancies as needed.</li>
                        <li>Assisted customers in resolving account-related inquiries and provided exceptional service.</li>
                        <li>Processed wire payments with accuracy and efficiency.</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">Frontend Web Developer</p>
                    <p>Amazing Print Tech, Toronto, ON | <span className="italic">01/2017 – 09/2017</span></p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Developed and maintained user-friendly websites with HTML, CSS, JavaScript, and jQuery.</li>
                        <li>Implemented SEO best practices to improve website visibility and search engine rankings.</li>
                        <li>Managed and maintained multiple cPanel/WHM servers for optimal performance and security.</li>
                        <li>Optimized website performance for better loading times and user experience.</li>
                        <li>Troubleshot and resolved website issues to minimize downtime and improve overall functionality.</li>
                        <li>Collaborated with UX/UI designers to ensure seamless integration of design concepts into web development projects.</li>
                    </ul>
                </div>
            </section>

            {/* Projects Section */}
            <section className="mb-10 p-10 rounded-3xl bg-white">
                <h2 className="text-2xl font-semibold mb-4">PROJECTS</h2>
                <div className="mb-6">
                    <p className="font-bold">Portfolio</p>
                    <p><span className="italic">React, Tailwind CSS</span></p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="YOUR_GITHUB_REPO" className="text-blue-500 underline">Github Repository</a></li>
                        <li><a href="YOUR_LIVE_PORTFOLIO" className="text-blue-500 underline">Live Portfolio</a></li>
                        <li>Designed with a responsive layout, my portfolio showcases my skills, projects, and provides contact information.</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">Airbnb Clone</p>
                    <p><span className="italic">Typescript, Next.js 13, React, MongoDB, Tailwind CSS</span></p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a href="YOUR_GITHUB_REPO" className="text-blue-500 underline">Github Repository</a></li>
                        <li><a href="YOUR_VERCEL_URL" className="text-blue-500 underline">Hosted on Vercel</a></li>
                        <li>A feature-rich Airbnb clone showcasing CRUD, user authentication, search filters, interactive maps, and efficient media management.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
 
export default Resume;