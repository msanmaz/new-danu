import Welcome from "./components/welcome";
import GridBox from "./components/boxes";
import ChildBox from "./components/boxes/childBox";
import Table from "./components/common/table";
const data = [
  {
      athlete: 'John Doe',
      gait: '7.5',
      jump: '7.5',
      balance: '7.5'
  },
  {
      athlete: 'Betty Jones',
      gait: '7.5',
      jump: '7.5',
      balance: '7.5'
  },
  {
      athlete: 'Marry Smith',
      gait: '7.5',
      jump: '7.5',
      balance: '7.5'
  },
  {
      athlete: 'Paul Jobs',
      gait: '7.5',
      jump: '7.5',
      balance: '7.5'
  },
  {
      athlete: 'Anthony Stewart',
      gait: '7.5',
      jump: '7.5',
      balance: '7.5'
  },
]


function App() {
  return (
    <div className="bg-[#0A111F] w-full h-screen px-[3rem]">


      <div className="">
        <Welcome />
        <GridBox>
          <ChildBox value='5' headline='Teams' />
          <ChildBox value='32' headline='Athletes' />
          <ChildBox value='120' headline='Sessions' />
          <ChildBox value='5' headline='Injured Athletes' />
          <ChildBox value='2' headline='Alerts' />
        </GridBox>
      </div>

    <div className="grid grid-cols-2 gap-4">
    <Table headers={['Athletes','Gait','Jump','Balance']} data={data}/>
    <Table headers={['Athletes','Gait','Jump','Balance']} data={data}/>

    </div>



    </div>
  );
}

export default App;
