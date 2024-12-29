const page = () => {
  return (
    <div>
      <form action="" className="gap-5 flex flex-col">
        <div className="flex flex-col gap-2" >
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button className="bg-red-200 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default page;
