import Container from "./Container";

const FooterTop = () => {
  const incentives = [
    {
      name: "Free shipping",
      imageSrc:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBjbGFzcz0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04LjI1IDE4Ljc1YTEuNSAxLjUgMCAwIDEtMyAwbTMgMGExLjUgMS41IDAgMCAwLTMgMG0zIDBoNm0tOSAwSDMuMzc1YTEuMTI1IDEuMTI1IDAgMCAxLTEuMTI1LTEuMTI1VjE0LjI1bTE3LjI1IDQuNWExLjUgMS41IDAgMCAxLTMgMG0zIDBhMS41IDEuNSAwIDAgMC0zIDBtMyAwaDEuMTI1Yy42MjEgMCAxLjEyOS0uNTA0IDEuMDktMS4xMjRhMTcuOTAyIDE3LjkwMiAwIDAgMC0zLjIxMy05LjE5MyAyLjA1NiAyLjA1NiAwIDAgMC0xLjU4LS44NkgxNC4yNU0xNi41IDE4Ljc1aC0yLjI1bTAtMTEuMTc3di0uOTU4YzAtLjU2OC0uNDIyLTEuMDQ4LS45ODctMS4xMDZhNDguNTU0IDQ4LjU1NCAwIDAgMC0xMC4wMjYgMCAxLjEwNiAxLjEwNiAwIDAgMC0uOTg3IDEuMTA2djcuNjM1bTEyLTYuNjc3djYuNjc3bTAgNC41di00LjVtMCAwaC0xMiIgLz4KPC9zdmc+Cg==",
      description:
        "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: "10-year warranty",
      imageSrc:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KCjwhLS0gTGljZW5zZTogQ0MwIExpY2Vuc2UuIE1hZGUgYnkgU1ZHIFJlcG86IGh0dHBzOi8vd3d3LnN2Z3JlcG8uY29tL3N2Zy80ODYxNjUvaW52b2ljZS13YXJyYW50eS1saW5lIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgY2xhc3M9Imljb24iICB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4Mi44NyAxNDYuMjloNTg1LjE0djI5Mi41N2g3My4xNFY3My4xNEgxMDkuNzJ2ODc3LjcyaDQwMi4yOXYtNzMuMTVIMTgyLjg3eiIgZmlsbD0iIzBGMUYzQyIgLz48cGF0aCBkPSJNNzEzLjE0IDQ4MS41Mkw1MTIgNTgyLjF2ODguMjRjMCAxMTAuMjkgNjIuMzEgMjExLjExIDE2MC45NSAyNjAuNDNsNDAuMTkgMjAuMDkgNDAuMTktMjAuMDljOTguNjQtNDkuMzIgMTYwLjk1LTE1MC4xNCAxNjAuOTUtMjYwLjQzVjU4Mi4xTDcxMy4xNCA0ODEuNTJ6IG0xMjggMTg4LjgxYzAgODMuMTItNDYuMTggMTU3Ljg0LTEyMC41MiAxOTUuMDFsLTcuNDggMy43NC03LjQ4LTMuNzRjLTc0LjM0LTM3LjE3LTEyMC41Mi0xMTEuOS0xMjAuNTItMTk1LjAxVjYyNy4zbDEyOC02NCAxMjggNjR2NDMuMDN6IiBmaWxsPSIjMEYxRjNDIiAvPjxwYXRoIGQ9Ik02NTcuODcgNjgzLjIxbC0zNi4zMyA0MS4xMSA5My4yNSA4Mi40MyAxMTMuOTMtMTMxLjA5LTQxLjM5LTM2TDcwOS42OSA3Mjl6TTI1NiAyNTZoNDM4Ljg2djczLjE0SDI1NnpNMjU2IDQzOC44NmgyOTIuNTdWNTEySDI1NnpNMjU2IDYyMS43MWgxNDYuMjl2NzMuMTRIMjU2eiIgZmlsbD0iIzBGMUYzQyIgLz48L3N2Zz4=",
      description:
        "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: "Exchanges",
      imageSrc:
        "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDEuOTQgMTIyLjg4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGwtcnVsZTpldmVub2RkO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cmV0dXJuLXByb2R1Y3Q8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkzLjM0LDcuNDlhMy4xMSwzLjExLDAsMCwxLDIsLjM4LDMuMDYsMy4wNiwwLDAsMSwxLjgyLDIuNzhsLjIsMjguMTYsMCwwLDAsMGgwbDAsMCwwLDBoMGwwLDAsMCwwaDBsMCwwLDAsMGgwbDAsMCwwLDBoLS4wOWwwLDBoMGwwLDBoLS4wOWwwLDBoMGwwLDBoLS4wNWwwLDBoMGwtLjA1LDBoMGwwLDBoLS4wNWwwLDBIOTUuOGwwLDBIOTEuODJsMCwwaC0uMDlsLS4wOSwwaDBsLS4wOSwwaC0uMDlsMCwwaDBsMCwwLS4xNi0yMi41Mi0xOSwxMlY3MC4wOGE0NS43Nyw0NS43NywwLDAsMS00LjkxLDNsLTEuMjEtMS44MlYyOC43TDQxLjQsMjUuNTdsLS45MSwyNi41Mi05LjgzLTYuNzEtOS44NCw1LjU2LDItMjcuNzRMNi4xMiwyMS4wN1Y3Ny45MWwzOS41LDQuMzktMS4xOSw2TDIuOTEsODMuNzFBMy4wNiwzLjA2LDAsMCwxLDAsODAuNjV2LTYzYTMuMDgsMy4wOCwwLDAsMSwxLjgzLTIuODZMMzQuNzkuMjVBMy4wNywzLjA3LDAsMCwxLDM2LjQyLDBMOTMuMzQsNy40OVpNNDguNywxMTQuMjdsOC4xOS00MS42MSw4LjMsMTIuNTFDODMuMDcsNzgsOTMuMTEsNjYuMTYsOTQuNiw0Ny45NGMxNC42OSwyNS42OCw1Ljc3LDQ4LjctMTIuODQsNjIuMThsOC40NywxMi43Nkw0OC43LDExNC4yN1pNNjQuNjEsOS44OGwtMTgsMTAuMjEsMjEuODIsMi43OEw4NC44NSwxMi41Myw2NC42MSw5Ljg4Wk0yNy42OCwxNy42Nyw0NS4xNCw3LjMyLDM2LjQ4LDYuMTksMTQuMjUsMTZsMTMuNDMsMS43MVoiLz48L3N2Zz4=",
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ];
  return (
    <Container className="py-0">
      <div className=" rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className=" sm:flex-shrink-0">
                <div className="flex-root">
                  <img
                    src={item.imageSrc}
                    alt="image"
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
