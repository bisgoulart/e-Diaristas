import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/data-display/Page Title/PageTitle";
import UserInformation from "ui/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />

      <UserInformation
        name={"Gabriela"}
        picture={" "}
        rating={3}
        description={"Rubiataba"}
      />
      <UserInformation
        name={"Gabriela"}
        picture={"https://avatars.githubusercontent.com/u/83188925?v=4"}
        rating={3}
        description={"Rubiataba"}
      />
    </div>
  );
}
