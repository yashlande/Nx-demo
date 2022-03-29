/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <>
    <div className="empty"></div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <div id="welcome">
          <h1>
            <span> Hello there , </span>
            Welcome {title} 👋
          </h1>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
