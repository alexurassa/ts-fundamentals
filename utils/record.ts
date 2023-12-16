// with Record<Keys, Type>, we can create object using keys from number, string or symbol
type Header = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeaderInfo {
  fontSize: string;
  fontWeight: string;
  color: string;
}

const headers: Record<Header, Partial<HeaderInfo>> = {
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
};

console.log("h1", headers.h1);
