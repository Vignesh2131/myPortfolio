import { Badge } from "./ui/badge";


const Contact = () => {
  return (
    <section className="flex space-y-2 mx-auto items-center flex-col w-[300px] md:w-[700px] mb-24">
      <div>
        <Badge className="text-base text-white" variant="outline">
          Contact me
        </Badge>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h3 className="text-4xl font-bold">Let’s Connect!</h3>
        <p className="text-center font-light">
          Have a project in mind or just want to chat about tech? Feel free to
          reach out! Connect with me on{" "}
          <a href="https://www.linkedin.com/in/vignesh-sadhu/">
            <span className="text-blue-500">LinkedIn</span>
          </a>{" "}
          or{" "}
          <a href="https://x.com/automatedlife21">
            <span className="text-blue-500">X (Twitter)</span>
          </a>
          —I’d love to hear from you!
        </p>
      </div>
    </section>
  );
}

export default Contact