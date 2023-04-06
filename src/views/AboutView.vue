<template>
  <main>
    <div class="spacer"></div>
    <div id="leftcolumn">
      <img
        id="headshot"
        src="../assets/headshot.jpeg"
        alt="Professional Headshot"
      />
      <ul id="socials">
        <li id="linkedin">
          <a href="https://www.linkedin.com/in/terry-mayberry/">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li id="github">
          <a href="https://github.com/tjbucket">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </li>
      </ul>
    </div>
    <div class="spacer"></div>
    <div id="rightcolumn">
      <h1 id="headline">Hi, I'm Terry Mayberry. I'm a junior developer.</h1>
      <p id="primarytext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        cursus tristique erat eu aliquet. Donec posuere id tortor quis
        tincidunt. Donec congue consequat magna, eu mollis ex ultricies at.
        Aenean eros metus, sodales nec posuere nec, feugiat ac ante. Donec
        dictum blandit urna, ut venenatis arcu vehicula vel. Vestibulum metus
        purus, congue a ultrices sed, placerat cursus enim. Nam arcu odio,
        eleifend ac felis a, cursus pharetra mauris. Suspendisse potenti.
        Suspendisse eget lacinia est, in ullamcorper ante. In tincidunt justo
        non est dictum, hendrerit lobortis elit luctus. Phasellus lobortis velit
        in vehicula lacinia. Sed nisi ipsum, venenatis molestie dolor at,
        volutpat aliquet justo. Aenean ullamcorper mauris et urna imperdiet, at
        hendrerit purus mattis. Maecenas et dolor nulla. Vivamus purus quam,
        tempor in ullamcorper ornare, efficitur eu sapien. Donec sed purus non
        tortor aliquet maximus vel vitae dolor. Maecenas ut dolor aliquet,
        imperdiet odio vitae, porttitor orci. Curabitur hendrerit efficitur
        iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Etiam libero est, tempor eu tortor sit
        amet, viverra finibus mauris. Suspendisse faucibus euismod cursus.
        Phasellus tempor at lorem eu facilisis. Donec semper nibh eu sapien
        finibus faucibus. Proin placerat elementum porttitor. Quisque tincidunt
        erat ut luctus posuere. Etiam tincidunt justo non enim accumsan
        elementum. Pellentesque sed sagittis libero. Praesent id tincidunt elit.
        Praesent placerat accumsan purus ac varius. Morbi cursus cursus egestas.
        In elementum, velit rhoncus rutrum faucibus, eros enim sodales neque,
        vitae cursus risus odio et lacus. Aenean ac lectus vehicula, luctus nunc
        non, bibendum ante. Integer ultricies dui nulla, non commodo neque
        ultrices ultricies. Duis libero ipsum, mattis nec turpis eget, auctor
        finibus ipsum. Vivamus scelerisque congue ligula vitae gravida. Morbi
        egestas convallis sagittis. Donec aliquet fringilla molestie. Donec
        ornare sapien non feugiat dapibus. Donec facilisis dolor sit amet quam
        convallis dignissim ut sit amet felis. Ut cursus at tortor eu suscipit.
        Quisque id mattis velit. Duis erat velit, egestas sit amet rutrum in,
        gravida a est. Integer quis tellus id felis sagittis tristique malesuada
        vitae leo. In sed odio ut nibh molestie sodales id sit amet ligula.
        Aenean eros lorem, facilisis sit amet ante vitae, placerat aliquam mi.
        Praesent nisl elit, volutpat sed nisi quis, tempor hendrerit libero.
        Donec quis enim placerat, commodo enim nec, imperdiet tellus. Donec in
        malesuada libero. Sed in sapien a nibh semper congue. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Etiam sollicitudin ipsum eu porta volutpat. Cras ultrices metus
        ac nulla rutrum, sed bibendum libero lacinia. Morbi id velit gravida,
        vehicula nulla in, malesuada dui. Ut bibendum nisl in suscipit auctor.
        Donec eu lorem dictum, porttitor neque in, imperdiet orci. Duis rutrum
        eleifend tincidunt. Vestibulum lacus elit, ultrices a tempor nec, semper
        eu libero. Praesent iaculis purus vulputate ultrices malesuada.
        Curabitur arcu felis, porta malesuada dictum ac, pharetra eu eros.
        Phasellus posuere erat vitae mauris dictum, non rhoncus dui malesuada.
      </p>
      <div class="spacer"></div>
      <h2 id="techlabel">I have experience with:</h2>
      <div class="spacer"></div>
      <ul id="techstacks">
        <li id="javastack">
          <font-awesome-icon :icon="['fab', 'java']" />
          <p>Core Java, JUnit, Spring Boot</p>
        </li>
        <li id="sql">
          <font-awesome-icon :icon="['fas', 'database']" />
          <p>PostgreSQL</p>
        </li>
      </ul>
    </div>
    <div class="spacer"></div>
  </main>
</template>

<script>
export default {};
</script>

<style>
main {
  padding-top: 15vh;
  display: flex;
}
#leftcolumn {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
}
.spacer {
  flex-basis: 2%;
}
#rightcolumn {
  flex-basis: 71%;
  display: flex;
  flex-direction: column;
  background-color: #1e2749;
}
#headline {
  margin-top: 5px;
  font-size: 48px;
  align-self: center;
}
ul {
  list-style: none;
}
#socials {
  display: flex;
  row-gap: 10px;
  column-gap: 20px;
}
#socials > li {
  font-size: 30px;
}
#techstacks > li {
  font-size: 24px;
  display: flex;
  column-gap: 5px;
}
</style>
