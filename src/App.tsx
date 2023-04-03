import "./styles.css";
import { useDocumentTitleChangeEffect } from "./hooks/useDocumentTitleChangeEffect";
export default function App() {
  const {
    loggingString: logString,
    interval: intvl
  } = useDocumentTitleChangeEffect({
    firstTitle: "Hello Newline!",
    secondTitle: "Hello TypeScript!",
    interval: 2000
  });

  return (
    <div className="App">
      <h1>Hello Newline!</h1>
      <p>Mock browser tab:</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "1px solid black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            width: "200px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {document.title}
        </div>
      </div>
    </div>
  );
}
