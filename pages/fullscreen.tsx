import NextBabylon from "src/components/NextBabylon";

export default function Fullscreen() {
  return (
    <div style={{ flex: 1, display: "flex", height: "100vh", width: "100vw" }}>
      <NextBabylon />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};
