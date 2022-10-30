import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <h1 className="our-co text-center"> Our courses </h1>
      <div className="bg-img">
        {/* Card1 */}
        <Grid className="cards">
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card9.jpg"}
              courseName="معسكر تطبيقات الويب للناشئين"
              courseDescription="يهدف المعسكر إلى تطوير الناشئ في مجال تطبيقات الويب باستخدام لغة JavaScript بدايةً من تعلم أساسيات تطبيقات الويب إلى أن يصل إلى بناء مشروع."
              instructorName="Abdulkarim Almuhr"
              courseDate="12/08/2022"
              avtImg={process.env.PUBLIC_URL + "/avt2.png"}
            />
          </GridItem>
          {/* Card2 */}
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card2.jpg"}
              courseName="تطوير تطبيقات iOS باستخدام SwiftUI"
              courseDescription="برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،"
              instructorName="Masha Aldossary"
              courseDate="06/03/2022"
              avtImg={process.env.PUBLIC_URL + "/avt3.png"}
            />
          </GridItem>
          {/* Card3 */}
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card8.jpg"}
              courseName="معسكر بايثون البرمجي للناشئين"
              courseDescription="معسكر يهدف إلى إيصال مفهوم الأنظمة الرقمية وأنواع لغات البرمجة وأهميتها والتى تمكن الناشئ من بناء برامج بسيطة داخل برنامج Python and how to use it."
              instructorName="Lamia Alqahtani"
              courseDate="11/20/2022"
              avtImg={process.env.PUBLIC_URL + "/avt5.png"}
            />
          </GridItem>
          {/* Card4 */}
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card3.jpg"}
              courseName="معسكر علم البيانات وتعلم الآلة"
              courseDescription="للتعرف على مفاهيم علم البيانات وكيفية تحليلها ونمذجتها واختيار الخوارزميات المناسبة وعرضها على شكل رسوم بيانية واضحة ومختصرة.."
              instructorName="Nourah Alshehri"
              courseDate="08/05/2021"
              avtImg={process.env.PUBLIC_URL + "/avt1.png"}
            />
          </GridItem>
          {/* Card5 */}
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card4.jpg"}
              courseName="معسكر تطبيقات الويب باستخدام جافا سكربت"
              courseDescription="يمكنك هذا المعسكر من بناء وتطوير تطبيقات ويب تفاعلية متكاملة باستخدام JavaScript."
              instructorName="Abdullah Alsabi"
              courseDate="01/09/2022"
              avtImg={process.env.PUBLIC_URL + "/avt6.png"}
            />
          </GridItem>
          {/* Card6 */}
          <GridItem>
            <Cards
              courseImg={process.env.PUBLIC_URL + "/card7.jpg"}
              courseName="معسكر طويق وأمازون للحوسبة السحابية"
              courseDescription="معسكر مكثف يقدّم تجربة فريدة من نوعها بخبرة عميقة في بناء مهارات الحوسبة السحابية للمنضمين للبرنامج.."
              instructorName="Ali Alshahrani"
              courseDate="12/31/2022"
              avtImg={process.env.PUBLIC_URL + "/avt8.png"}
            />
          </GridItem>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default App;
