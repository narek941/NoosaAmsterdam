import React from "react";

const iconStyle = {
  textAlign: "center",
  font: "normal normal bold 16px / 19px Roboto",
  letterSpacing: "0px",
  color: "#F5F3F2",
  opacity: 1,
  textTransform: "capitalize",
  margin: "15px",
  // right: '200px',
};

const IconButton = (props) => {
  switch (props.type) {
    case "search":
      return (
        <div style={iconStyle}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7555 18.6065L16.3182 15.2458L16.2376 15.1233C16.0878 14.9742 15.883 14.8902 15.6692 14.8902C15.4554 14.8902 15.2505 14.9742 15.1007 15.1233C12.1795 17.8033 7.67815 17.949 4.58201 15.4637C1.48586 12.9784 0.755668 8.63337 2.87568 5.31017C4.9957 1.98697 9.30807 0.716847 12.9528 2.34214C16.5976 3.96743 18.4438 7.98379 17.267 11.7276C17.1823 11.9981 17.2515 12.2922 17.4487 12.4992C17.6459 12.7062 17.9411 12.7946 18.223 12.7311C18.505 12.6676 18.7309 12.4619 18.8156 12.1914C20.2224 7.74864 18.0977 2.96755 13.8161 0.941058C9.53449 -1.08544 4.38084 0.250824 1.68905 4.08542C-1.00273 7.92001 -0.424821 13.1021 3.04893 16.2795C6.52268 19.4569 11.8498 19.6759 15.5841 16.7949L18.6277 19.7705C18.942 20.0765 19.4502 20.0765 19.7645 19.7705C20.0785 19.4602 20.0785 18.9606 19.7645 18.6503L19.7555 18.6065Z"
              fill="#F5F3F2"
            />
          </svg>
        </div>
      );
    case "basket":
      return (
        <div style={iconStyle}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4895 4.66448C19.0925 4.19609 18.5155 3.92669 17.9085 3.92669H7.16377C6.74978 3.92669 6.41378 4.26956 6.41378 4.69203C6.41378 5.11451 6.74978 5.45738 7.16377 5.45738H17.9085C18.1435 5.45738 18.2895 5.588 18.3555 5.66556C18.4215 5.74413 18.5275 5.91047 18.4935 6.14721L17.5445 12.8404C17.4695 13.365 17.0215 13.7609 16.5015 13.7609H5.59081C5.03782 13.7609 4.58683 13.3374 4.54083 12.7761L3.57786 1.06939C3.54986 0.722434 3.29486 0.437725 2.95887 0.378538L0.877924 0.0101507C0.464935 -0.0571999 0.0809442 0.217305 0.0109459 0.634674C-0.0590523 1.05102 0.213941 1.44696 0.621931 1.51942L2.13189 1.78576L3.04587 12.9037C3.15787 14.265 4.25184 15.2916 5.59081 15.2916H16.5015C17.7625 15.2916 18.8485 14.3323 19.0285 13.0598L19.9784 6.36661C20.0654 5.7523 19.8864 5.13287 19.4895 4.66448ZM3.90795 18.455C3.90795 17.6029 4.58793 16.909 5.42291 16.909C6.25789 16.909 6.93687 17.6029 6.93687 18.455C6.93687 19.3071 6.25789 20 5.42291 20C4.58793 20 3.90795 19.3071 3.90795 18.455ZM15.1607 18.455C15.1607 17.6029 15.8396 16.909 16.6746 16.909C17.5096 16.909 18.1896 17.6029 18.1896 18.455C18.1896 19.3071 17.5096 20 16.6746 20C15.8396 20 15.1607 19.3071 15.1607 18.455ZM15.6488 8.46428C15.6488 8.88675 15.3128 9.22963 14.8988 9.22963H12.1258C11.7109 9.22963 11.3759 8.88675 11.3759 8.46428C11.3759 8.04181 11.7109 7.69893 12.1258 7.69893H14.8988C15.3128 7.69893 15.6488 8.04181 15.6488 8.46428Z"
              fill="#F5F3F2"
            />
          </svg>
        </div>
      );
    case "basketOrange":
      return (
        <svg
          width="26px"
          height="26px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4895 4.66448C19.0925 4.19609 18.5155 3.92669 17.9085 3.92669H7.16377C6.74978 3.92669 6.41378 4.26956 6.41378 4.69203C6.41378 5.11451 6.74978 5.45738 7.16377 5.45738H17.9085C18.1435 5.45738 18.2895 5.588 18.3555 5.66556C18.4215 5.74413 18.5275 5.91047 18.4935 6.14721L17.5445 12.8404C17.4695 13.365 17.0215 13.7609 16.5015 13.7609H5.59081C5.03782 13.7609 4.58683 13.3374 4.54083 12.7761L3.57786 1.06939C3.54986 0.722434 3.29486 0.437725 2.95887 0.378538L0.877924 0.0101507C0.464935 -0.0571999 0.0809442 0.217305 0.0109459 0.634674C-0.0590523 1.05102 0.213941 1.44696 0.621931 1.51942L2.13189 1.78576L3.04587 12.9037C3.15787 14.265 4.25184 15.2916 5.59081 15.2916H16.5015C17.7625 15.2916 18.8485 14.3323 19.0285 13.0598L19.9784 6.36661C20.0654 5.7523 19.8864 5.13287 19.4895 4.66448ZM3.90795 18.455C3.90795 17.6029 4.58793 16.909 5.42291 16.909C6.25789 16.909 6.93687 17.6029 6.93687 18.455C6.93687 19.3071 6.25789 20 5.42291 20C4.58793 20 3.90795 19.3071 3.90795 18.455ZM15.1607 18.455C15.1607 17.6029 15.8396 16.909 16.6746 16.909C17.5096 16.909 18.1896 17.6029 18.1896 18.455C18.1896 19.3071 17.5096 20 16.6746 20C15.8396 20 15.1607 19.3071 15.1607 18.455ZM15.6488 8.46428C15.6488 8.88675 15.3128 9.22963 14.8988 9.22963H12.1258C11.7109 9.22963 11.3759 8.88675 11.3759 8.46428C11.3759 8.04181 11.7109 7.69893 12.1258 7.69893H14.8988C15.3128 7.69893 15.6488 8.04181 15.6488 8.46428Z"
            fill="#F5F3F2"
          />
        </svg>
      );
    case "user":
      return (
        <div style={iconStyle}>
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05836 7.35387C8.05836 5.19392 9.82642 3.43696 12 3.43696C14.1736 3.43696 15.9416 5.19392 15.9416 7.35387C15.9416 9.51281 14.1736 11.2698 12 11.2698C9.82642 11.2698 8.05836 9.51281 8.05836 7.35387ZM6.61233 7.35387C6.61233 10.3048 9.02943 12.7067 12 12.7067C14.9706 12.7067 17.3867 10.3048 17.3867 7.35387C17.3867 4.40194 14.9706 2 12 2C9.02943 2 6.61233 4.40194 6.61233 7.35387ZM10.9776 21.985C11.3127 21.995 11.6538 22 12 22C15.4345 22 20 21.619 20 18.3301C20 14.6392 13.9784 14.6392 12 14.6392C8.56553 14.6392 4 15.0202 4 18.3101C4 19.2951 4.46088 20.624 6.6566 21.363C7.03597 21.493 7.44453 21.288 7.57333 20.913C7.70113 20.538 7.49887 20.131 7.1205 20.004C5.61811 19.4981 5.44503 18.7951 5.44503 18.3101C5.44503 16.8271 7.65082 16.0751 12 16.0751C16.3492 16.0751 18.555 16.8341 18.555 18.3301C18.555 19.8121 16.3492 20.563 12 20.563C11.6679 20.563 11.3409 20.559 11.0189 20.55C10.6325 20.553 10.2883 20.851 10.2772 21.247C10.2652 21.644 10.5791 21.975 10.9776 21.985Z"
              fill="#F5F3F2"
            />
          </svg>
        </div>
      );
    case "insta":
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M23.169,0H8.831A8.841,8.841,0,0,0,0,8.831V23.169A8.841,8.841,0,0,0,8.831,32H23.169A8.841,8.841,0,0,0,32,23.169V8.831A8.841,8.841,0,0,0,23.169,0Zm5.992,23.169a6,6,0,0,1-5.992,5.992H8.831a6,6,0,0,1-5.991-5.992V8.831A6,6,0,0,1,8.831,2.839H23.169a6,6,0,0,1,5.992,5.992V23.169Z" />
            <path
              d="M49.628,40.97a8.66,8.66,0,1,0,8.66,8.66A8.67,8.67,0,0,0,49.628,40.97Zm0,14.338a5.678,5.678,0,1,1,5.678-5.678A5.684,5.684,0,0,1,49.628,55.308Z"
              transform="translate(-33.628 -33.63)"
            />
            <path
              d="M120.892,28.251a1.97,1.97,0,1,0,1.394.577A1.979,1.979,0,0,0,120.892,28.251Z"
              transform="translate(-96.232 -22.861)"
            />
          </svg>
        </div>
      );
    case "fb":
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
          >
            <path d="M32,16A16,16,0,1,0,16,32c.094,0,.188,0,.281-.006V19.544H12.844V15.538h3.438v-2.95c0-3.419,2.087-5.281,5.138-5.281a27.924,27.924,0,0,1,3.081.156v3.575H22.4c-1.656,0-1.981.788-1.981,1.944v2.55h3.969l-.519,4.006h-3.45V31.381A16,16,0,0,0,32,16Z" />
          </svg>
        </div>
      );
    case "like":
      return (
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5206 2.8027C19.1348 3.30469 20.4771 4.45775 21.2354 5.99382C22.122 7.85558 22.2427 10.0008 21.5707 11.9536C20.9521 13.7513 19.938 15.3809 18.6059 16.7178C17.7325 17.6155 16.7914 18.442 15.7912 19.1898L15.7383 19.2347C15.406 19.4584 14.9591 19.3706 14.7324 19.037C14.6171 18.8759 14.5708 18.674 14.6041 18.4776C14.6373 18.2811 14.7473 18.1067 14.9088 17.9942C15.8474 17.2871 16.7323 16.5088 17.5559 15.6661C18.7421 14.4987 19.648 13.0683 20.203 11.4861C20.7368 9.90956 20.6288 8.18086 19.903 6.68598C19.3189 5.51 18.2899 4.62715 17.053 4.24096C15.4753 3.73838 13.7565 4.04305 12.4382 5.05896C12.1762 5.25674 11.818 5.25674 11.5559 5.05896C10.2382 4.04164 8.5187 3.73684 6.94115 4.24096C5.69596 4.61862 4.65663 5.4988 4.06466 6.67699C3.35526 8.17077 3.25377 9.88955 3.78231 11.4592C4.33967 13.0376 5.24529 14.4645 6.42938 15.6301C8.179 17.3392 10.1083 18.8465 12.1824 20.1246C12.4461 20.3111 12.5621 20.6493 12.4697 20.9625C12.3773 21.2757 12.0974 21.4927 11.7765 21.5C11.6318 21.5008 11.4903 21.457 11.3706 21.3741C9.21007 20.0429 7.20077 18.4723 5.37938 16.6908C4.03993 15.3583 3.02208 13.7276 2.40583 11.9266C1.75701 9.97655 1.8902 7.84437 2.77642 5.99382C3.5347 4.45775 4.87695 3.30469 6.49115 2.8027C8.34706 2.21871 10.3607 2.48784 12.0059 3.53981C13.6511 2.48784 15.6647 2.21871 17.5206 2.8027ZM16.7971 9.68833C16.7602 8.85762 16.2172 8.13914 15.4383 7.89052C15.1487 7.70632 15.02 7.34441 15.1267 7.01402C15.2334 6.68363 15.5479 6.47024 15.8883 6.49721C17.2039 6.92033 18.1404 8.10845 18.2618 9.50855C18.2867 9.70431 18.2335 9.90206 18.1141 10.0575C17.9946 10.213 17.819 10.3131 17.6265 10.3355C17.2224 10.3887 16.8519 10.0997 16.7971 9.68833Z"
              fill="#200E32"
            />
          </svg>
        </div>
      );
    default:
      return <div>j</div>;
  }
};
export default IconButton;
