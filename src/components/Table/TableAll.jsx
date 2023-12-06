import Categories from "./Categories";
import OneHundred from "./OneHundred";
import TwoHundred from "./TwoHundred";
import ThreeHundred from "./ThreeHundrerd";
import FourHundred from "./FourHundred";
import FiveHundred from "./FiveHundred";
import OneThousand from "./OneThousand";
const TableAll = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <Categories></Categories>
        {/* Seccion 100 */}
        <OneHundred></OneHundred>
        {/* Seccion 200 */}
        <TwoHundred></TwoHundred>
        {/* Seccion 300 */}
        <ThreeHundred></ThreeHundred>
        {/* Seccion 400 */}
        <FourHundred></FourHundred>
        {/* Seccion 500 */}
        <FiveHundred></FiveHundred>
        {/* Seccion 1000 */}
        <OneThousand></OneThousand>
      </div>
    </>
  );
};

export default TableAll;
