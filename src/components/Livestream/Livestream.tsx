import { Button } from "@/components/ui/button";

const Livestream = () => {
  const youtubeLink = "https://www.youtube.com/watch?v=FhRCxCFzN3g";

  const redirectToYoutube = () => {
    window.open(youtubeLink, "_blank"); // Opens in a new tab
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Join Our Livestream
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
        Click the button below to open our YouTube livestream in a new tab. You can continue browsing this page while watching.
      </p>
      <Button
        onClick={redirectToYoutube}
        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all px-6 py-3"
      >
        Open Livestream
      </Button>
    </div>
  );
};

export default Livestream;
