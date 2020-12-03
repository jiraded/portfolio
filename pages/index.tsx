import Axios from 'axios'

interface PropType {
  name: string
}
const Index = (prop: PropType) => {
  return <div>{prop.name}</div>
}

export const getServerSideProps = async () => {
  const res = await Axios.get('http://localhost:5000')
  return {
    props: {
      name: res.data.name,
    },
  }
}

export default Index
