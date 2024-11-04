import { useState } from "react";

export default function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section>
      <h1>Terms And conditions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        maiores voluptas quae iure sint aliquam, quibusdam voluptatibus, qui,
        sapiente tempore ullam perferendis consectetur impedit hic quam. Velit
        labore modi aliquid!
      </p>
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} /> Accept
      terms and conditions
      <br/>
      <button disabled={!isChecked} className="btn">Submit</button>
    </section>
  );
}
