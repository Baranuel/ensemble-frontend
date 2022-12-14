import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterCss>
      <FooterContent>
        <FooterLogo>
          Musik Samspil<a href="#home"></a>
        </FooterLogo>
        <FooterItems>
          <FooterNav>
            <FooterNavLinks>
              <FooterNavLink href="#home"> Home</FooterNavLink>
              <FooterNavLink href="#ensambles">See ensambles</FooterNavLink>
              <FooterNavLink href="#profile">Profile</FooterNavLink>
            </FooterNavLinks>
            <FooterSocial>
              <a href="https://www.instagram.com/daosdk/">
                <img src="src\assets\logo-instagram.svg" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/DAOSDK/">
                <img src="src\assets\logo-facebook.svg" alt="" />
              </a>
            </FooterSocial>
          </FooterNav>

          <FooterNotes>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="225px"
              height="100%"
              viewBox="0 0 224.251 77.704"
            >
              <g opacity="0.3">
                <g data-name="Group 689">
                  <g data-name="Group 684">
                    <path
                      data-name="Path 123"
                      d="M30.08 31.62c-10.744 0-20.668-.935-29.71-3.366a.5.5 0 01.26-.966c22.535 6.061 50.764 2.727 83.452-1.132 41.651-4.919 88.859-10.493 139.78 1.128a.5.5 0 11-.223.975C172.887 16.677 125.77 22.24 84.2 27.15c-19.742 2.33-37.866 4.469-54.12 4.47z"
                    ></path>
                  </g>
                  <g data-name="Group 685">
                    <path
                      data-name="Path 124"
                      d="M30.079 41.433c-10.744 0-20.667-.933-29.709-3.366a.5.5 0 01.26-.967c22.535 6.061 50.764 2.728 83.45-1.133 41.651-4.919 88.858-10.494 139.781 1.128a.5.5 0 11-.223.975c-50.752-11.582-97.87-6.018-139.441-1.11-19.74 2.333-37.864 4.472-54.118 4.473z"
                    ></path>
                  </g>
                  <g data-name="Group 686">
                    <path
                      data-name="Path 125"
                      d="M30.08 51.246c-10.744 0-20.668-.935-29.71-3.366a.5.5 0 01.26-.966c22.535 6.062 50.764 2.728 83.452-1.132 41.651-4.919 88.859-10.493 139.78 1.128a.5.5 0 11-.223.975C172.887 36.3 125.77 41.867 84.2 46.776c-19.742 2.33-37.866 4.47-54.12 4.47z"
                    ></path>
                  </g>
                  <g data-name="Group 687">
                    <path
                      data-name="Path 126"
                      d="M30.079 61.059c-10.744 0-20.667-.934-29.709-3.366a.5.5 0 01.26-.966c22.535 6.062 50.764 2.728 83.45-1.133 41.651-4.918 88.858-10.494 139.781 1.128a.5.5 0 11-.223.975c-50.752-11.583-97.87-6.018-139.441-1.11-19.74 2.332-37.864 4.472-54.118 4.472z"
                    ></path>
                  </g>
                  <g data-name="Group 688">
                    <path
                      data-name="Path 127"
                      d="M30.08 70.873c-10.744 0-20.668-.935-29.71-3.366a.5.5 0 11.26-.966c22.535 6.062 50.764 2.728 83.452-1.132 41.651-4.919 88.859-10.494 139.78 1.128a.5.5 0 11-.223.975C172.887 55.93 125.77 61.493 84.2 66.4c-19.742 2.333-37.866 4.472-54.12 4.473z"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 690">
                  <path
                    data-name="Path 128"
                    d="M30.3 1.47c-1.055 3.728-1.959 7.561-2.7 11.384s-1.36 7.677-1.74 11.535a79.578 79.578 0 00-.389 11.545c.083 1.923.3 3.771.535 5.752l.726 5.854 1.6 11.7c.265 1.962.561 3.918.717 5.967a21.035 21.035 0 01.056 3.2 11.326 11.326 0 01-.78 3.359 9.434 9.434 0 01-4.736 4.98 9.863 9.863 0 01-6.723.624 9.747 9.747 0 01-5.474-3.805 12.355 12.355 0 01-2.063-6.086 1 1 0 011.971-.239v.021a10.754 10.754 0 001.986 4.9 7.2 7.2 0 004.187 2.6 7.415 7.415 0 004.812-.637 6.4 6.4 0 003.125-3.5 10.642 10.642 0 00.327-5.106c-.217-1.88-.519-3.828-.821-5.77-.615-3.893-1.226-7.81-1.745-11.735l-.763-5.89c-.258-1.933-.465-4.013-.538-6.033A71.813 71.813 0 0122.48 24 101.245 101.245 0 0128.413.8a1 1 0 011.9.628z"
                  ></path>
                </g>
                <g data-name="Group 691">
                  <path
                    data-name="Path 129"
                    d="M31.369.468a19.556 19.556 0 012.938 3.477A17.193 17.193 0 0136.324 8.1a12.632 12.632 0 01.6 4.828 11.506 11.506 0 01-1.415 4.759 16.088 16.088 0 01-2.909 3.787l-.85.786-.823.691q-.822.677-1.658 1.322c-2.225 1.727-4.5 3.3-6.694 4.88a56.828 56.828 0 00-6.141 4.864 15.793 15.793 0 00-4.051 5.707 12.9 12.9 0 00-.5 6.774l.166.893a6.721 6.721 0 00.831 2.094A10.157 10.157 0 0015 51.976a18.525 18.525 0 0013.443 3.986 10.32 10.32 0 006.092-2.643 8.422 8.422 0 001.885-2.68 9.325 9.325 0 00.83-3.272 7.342 7.342 0 00-2.5-5.906 12.367 12.367 0 00-6.484-3.055 9.459 9.459 0 00-6.915 1.272C19.468 41.03 18.5 43.3 17.908 46.11a7.092 7.092 0 01-.439-4.334 6.977 6.977 0 012.458-3.928 10.1 10.1 0 014.173-1.986 14.177 14.177 0 014.507-.273 15.434 15.434 0 018.353 3.349 11.423 11.423 0 012.987 3.741 10.7 10.7 0 011.082 4.782 13.6 13.6 0 01-.9 4.7 12.236 12.236 0 01-2.572 4.137 14.688 14.688 0 01-8.494 4.177 21.832 21.832 0 01-9.077-.585 21.732 21.732 0 01-8.186-4.157 14.952 14.952 0 01-3.215-3.689A12.113 12.113 0 017.5 49.708a12.258 12.258 0 01-.347-1.257l-.215-1.121a17.939 17.939 0 01.728-9.382A20.137 20.137 0 0113 30.381a60.608 60.608 0 016.743-5.258c2.275-1.566 4.529-3.059 6.656-4.64q.8-.591 1.573-1.2l.761-.61.68-.579a11.615 11.615 0 002.184-2.6 7.982 7.982 0 00.848-6.268 13.3 13.3 0 00-1.365-3.289 17.8 17.8 0 00-2.1-2.969l-.08-.088A1.727 1.727 0 0131.369.468z"
                  ></path>
                </g>
                <g data-name="Group 692">
                  <circle
                    data-name="Ellipse 17"
                    cx="5.199"
                    cy="5.199"
                    r="5.199"
                    transform="translate(8.911 62.701)"
                  ></circle>
                </g>
                <g data-name="Group 693">
                  <ellipse
                    data-name="Ellipse 18"
                    cx="8.236"
                    cy="6.43"
                    rx="8.236"
                    ry="6.43"
                    transform="rotate(-12.569 291.822 -201.371)"
                  ></ellipse>
                </g>
                <g data-name="Group 694">
                  <path
                    data-name="Path 130"
                    d="M66.623 62.417a1 1 0 01-.929-.629c-4.253-10.633-2.253-26.69-2.166-27.369a1 1 0 011.983.255c-.021.161-2.019 16.224 2.04 26.371a1 1 0 01-.557 1.3 1.015 1.015 0 01-.371.072z"
                  ></path>
                </g>
                <g data-name="Group 695">
                  <path
                    data-name="Path 131"
                    d="M63.353 28.939s1.405 4.38 10.3 5.575 9.788 7.275 6.75 11.948c-.935-3.271-2.535-7.17-6.984-6.772a21.453 21.453 0 01-10.066-1.39c-1.639-.8 0-9.361 0-9.361z"
                  ></path>
                </g>
                <g data-name="Group 696">
                  <ellipse
                    data-name="Ellipse 19"
                    cx="7.547"
                    cy="5.892"
                    rx="7.547"
                    ry="5.892"
                    transform="rotate(-8.88 299.208 -799.899)"
                  ></ellipse>
                </g>
                <g data-name="Group 697">
                  <ellipse
                    data-name="Ellipse 20"
                    cx="7.547"
                    cy="5.892"
                    rx="7.547"
                    ry="5.892"
                    transform="rotate(-8.88 284.943 -988.103)"
                  ></ellipse>
                </g>
                <g data-name="Group 698">
                  <path
                    data-name="Path 132"
                    d="M139.928 39.151a1 1 0 01-.97-.761c-2.651-10.779-.008-28.324.106-29.066a1 1 0 011.977.3c-.027.178-2.7 17.894-.142 28.285a1 1 0 01-.731 1.21 1.047 1.047 0 01-.24.032z"
                  ></path>
                </g>
                <g data-name="Group 699">
                  <path
                    data-name="Path 133"
                    d="M139.139 21.773a1 1 0 01-.013-2c.179 0 18.037-.257 28.53-2.765a1 1 0 11.465 1.945c-10.712 2.56-28.229 2.811-28.97 2.82z"
                  ></path>
                </g>
                <g data-name="Group 700">
                  <path
                    data-name="Path 134"
                    d="M168.867 36.138a1 1 0 01-.97-.761c-2.651-10.777-.008-28.325.103-29.066a1 1 0 011.977.3c-.027.178-2.7 17.895-.142 28.285a1 1 0 01-.731 1.21 1.041 1.041 0 01-.237.032z"
                  ></path>
                </g>
                <g data-name="Group 705">
                  <g data-name="Group 701">
                    <ellipse
                      data-name="Ellipse 21"
                      cx="8.236"
                      cy="6.43"
                      rx="8.236"
                      ry="6.43"
                      transform="rotate(-12.569 272.085 -382.838)"
                    ></ellipse>
                  </g>
                  <g data-name="Group 702">
                    <path
                      data-name="Path 135"
                      d="M105.642 53.772a1 1 0 01-.929-.629c-4.25-10.624-2.367-28.353-2.285-29.1a1 1 0 111.988.218c-.02.179-1.909 17.984 2.154 28.142a1 1 0 01-.557 1.3 1.015 1.015 0 01-.371.069z"
                    ></path>
                  </g>
                  <g data-name="Group 703">
                    <path
                      data-name="Path 136"
                      d="M102.372 20.294s1.427 4.226 10.3 5.575c7.13 1.084 9.145 8.969 8.707 12.036-.935-3.271-4.118-8.674-9.2-9.112a25.526 25.526 0 01-9.287-2.716c-1.635-.796-.52-5.783-.52-5.783z"
                    ></path>
                  </g>
                  <g data-name="Group 704">
                    <path
                      data-name="Path 137"
                      d="M102.545 29.056s1.517 2.473 10.394 3.823c7.13 1.084 8.97 3.712 8.532 6.779-.935-3.271-3.943-3.417-9.025-3.855a27.472 27.472 0 01-9.464-2.541c-1.639-.797-.437-4.206-.437-4.206z"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 710">
                  <g data-name="Group 706">
                    <ellipse
                      data-name="Ellipse 22"
                      cx="8.236"
                      cy="6.43"
                      rx="8.236"
                      ry="6.43"
                      transform="rotate(-9.968 190.063 -1028.364)"
                    ></ellipse>
                  </g>
                  <g data-name="Group 707">
                    <path
                      data-name="Path 138"
                      d="M184.01 54.608a1 1 0 01-.944-.671c-3.764-10.807-.806-30.094-.678-30.91a1 1 0 011.977.31c-.031.195-3.009 19.609.59 29.942a1 1 0 01-.945 1.329z"
                    ></path>
                  </g>
                  <g data-name="Group 708">
                    <path
                      data-name="Path 139"
                      d="M183.542 58.061s2.108-4.912 10.817-7.094c6.995-1.753 8.256-9.794 7.53-12.805-.621 3.345-3.28 9.025-8.3 9.941a33.848 33.848 0 00-10.111 3.7c-1.553.944.064 6.258.064 6.258z"
                    ></path>
                  </g>
                  <g data-name="Group 709">
                    <path
                      data-name="Path 140"
                      d="M183.659 47.748s1.276-2.606 9.986-4.788c6.995-1.753 8.893-3.54 8.167-6.551-.621 3.345-3.917 2.77-8.934 3.687a27.49 27.49 0 00-9.178 3.424c-1.561.948-.041 4.228-.041 4.228z"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 711">
                  <path
                    data-name="Path 141"
                    d="M168.786 13.824a157.1 157.1 0 01-30.74 2.193l.552-8.393a162.478 162.478 0 0030.74-2.193z"
                  ></path>
                </g>
              </g>
            </svg>
          </FooterNotes>

          <FooterDaos>
            <a href="http://daos.dk" target="_blank" rel="noopener noreferrer">
              <img src="src\assets\daos-logo-link.png" alt="Daos Website" />
            </a>
          </FooterDaos>
        </FooterItems>
      </FooterContent>
    </FooterCss>
  );
}

export default Footer;

const FooterCss = styled.footer`
  margin-top: 2rem;
  min-height: 25vh;
  background: #bf1e2e;
`;

const FooterContent = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 2rem 0;
`;

const FooterLogo = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

const FooterNav = styled.div`
  width: 1/3;
`;

const FooterNavLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterNavLink = styled.a`
  margin-right: 1rem;
  font-size: 0.9rem;

  color: #fff;
  text-decoration: none;
  font-weight: 600;
`;

const FooterSocial = styled.div`
  display: flex;
  img {
    margin-right: 1rem;
    margin-top: 1rem;
  }
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterNotes = styled.div`
  width: 1/3;
`;
const FooterDaos = styled.div`
  width: 1/3;
  img {
    height: 80px;
  }
`;
