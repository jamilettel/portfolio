import AnimatedContainer from "@/components/animated-transitions/AnimatedContainer";
import AnimatedLink from "@/components/link/AnimatedLink";
import "./Test.scss";

export default function Test() {
  return (
    <AnimatedContainer className="test-content">
      <div className="content">
        <h1>Welcome to the test page.</h1>
        <div style={{ width: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          suscipit leo purus, eu porttitor velit sagittis vitae. Cras mauris ex,
          dapibus ac suscipit a, varius faucibus nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Morbi volutpat turpis eu ultrices congue. Cras mi est,
          malesuada in viverra sed, pharetra sit amet nisi. Cras ullamcorper
          turpis lacus, ac pretium ligula iaculis non. Morbi a tincidunt ex.
          Donec ultrices volutpat augue non placerat. Nunc pellentesque rutrum
          dignissim. Sed blandit vitae elit vel tempor. In a ultrices ipsum.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nec ex sit amet risus bibendum placerat
          eu a purus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Cras laoreet tellus sed nisl molestie, sit amet auctor lorem
          gravida. Fusce euismod lorem dui, vitae feugiat quam pulvinar quis.
          Nam quis vehicula sapien. Donec sed tellus non arcu varius venenatis
          eget a orci. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam ac viverra ante. Mauris quis ipsum placerat, porta
          purus id, pulvinar leo. Maecenas tellus massa, tempus et lorem eget,
          dictum convallis purus. Curabitur odio dolor, dictum quis pellentesque
          ac, lobortis in felis. Aenean molestie diam id pulvinar pretium.
          Phasellus mattis elementum convallis. Ut quis leo vestibulum, tempus
          mauris in, accumsan mi. Aliquam tristique purus eu quam facilisis
          dignissim. Vestibulum elementum congue nisi non lacinia. Mauris
          tincidunt lobortis tellus at scelerisque. Maecenas vitae ullamcorper
          risus, vitae ultrices erat. In imperdiet orci feugiat venenatis
          laoreet. Aliquam erat volutpat. Sed sit amet ex at mauris pretium
          mattis eget at erat. Pellentesque convallis, orci at gravida dictum,
          ante risus mollis diam, sed euismod tellus est id nibh. Etiam feugiat
          eros a augue tincidunt, eget bibendum dolor ornare. Nunc convallis,
          augue ut pretium vehicula, diam odio aliquam dolor, vel maximus elit
          eros sit amet ex. Nunc vitae metus venenatis lorem dictum condimentum.
          Ut elit neque, consequat sed sem vitae, aliquet condimentum risus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aliquam at laoreet orci, sed aliquam tortor.
          Cras quis elit eros. Nulla quis finibus turpis. Phasellus odio dui,
          sollicitudin nec porta viverra, tristique ut leo. Sed finibus orci nec
          interdum rhoncus. Donec imperdiet sapien sit amet ligula rutrum, nec
          porta nunc ornare. Nullam vulputate mollis sem, a placerat purus
          faucibus id. Suspendisse fringilla tristique risus sed mollis. Ut
          eleifend malesuada erat, a malesuada leo dapibus a. Praesent ligula
          velit, dictum ut volutpat vitae, efficitur suscipit tortor. Nam ac
          rutrum ipsum, nec rutrum lorem. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Quisque
          condimentum arcu vitae dictum finibus. Proin a sodales nunc. Aliquam
          in tincidunt tellus, non rhoncus orci. In quam ex, condimentum sit
          amet commodo in, finibus a turpis. Nam bibendum, orci sit amet pretium
          porta, turpis metus ultrices nisl, nec blandit urna erat efficitur
          magna. Donec nec ullamcorper leo. Aenean ut dignissim lorem, eget
          iaculis ligula. Suspendisse ultricies nibh ac gravida porttitor. Sed
          convallis semper enim quis vehicula.
        </div>
        <AnimatedLink href="/">Go back</AnimatedLink>
      </div>
    </AnimatedContainer>
  );
}
