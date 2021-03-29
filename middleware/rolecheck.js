export default function({ store, redirect }) {
  if(store.$auth.user.role.indexOf('Treasurer')<0){
  return redirect('/authorization')
  }


}
