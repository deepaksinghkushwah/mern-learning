import { useUserStore } from "../store/useStore"

const Unauthorized = () => {
  const user = useUserStore(state => state.user);
  console.log(user);
  return (
    <div>You are not allowed to do this action!!!</div>
  )
}

export default Unauthorized