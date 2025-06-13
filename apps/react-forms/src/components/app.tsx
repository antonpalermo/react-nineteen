export default function App() {
  function submitForm(formData: FormData) {
    
  }

  return (
    <form action={submitForm}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" defaultValue={'Jane Doe'} />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        defaultValue={'Not Secure Password'}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
