const CheckoutActions = () => {
  const handleCheckoutRedirect = ({ payment = "" }) => {
    if (payment == "shop_pay") {
      console.log("redirectionUrl", redirectionUrl);
      window.location.replace(redirectionUrl);
    } else {
      console.log("redirectionUrl", redirectionUrl);
      window.location.replace(redirectionUrl);
    }
  };

  return (
    <div className="border-t p-5">
      <button
        className="block py-5 flex align-center items-center justify-center text-white text-base font-medium bg-[#5931f5] rounded-lg w-full bg-blue hover:bg-[#5931f5]/75"
        onClick={() => handleCheckoutRedirect("shop_pay")}
      >
        <span>Pay with</span>
        <svg
          className="px-2 pt-1"
          width="100"
          viewBox="0 0 4317 1037"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M1105.96 326.186C1071.34 253.553 1005.7 206.635 906.786 206.635C876.426 207.164 846.593 214.661 819.588 228.543C792.585 242.427 769.128 262.328 751.033 286.711L747.423 291.109V6.44337C747.423 4.7982 746.77 3.22051 745.606 2.05722C744.443 0.8939 742.864 0.240234 741.219 0.240234H601.367C599.742 0.269795 598.194 0.936325 597.055 2.09644C595.915 3.25656 595.277 4.81756 595.277 6.44337V822.999C595.277 824.614 595.92 826.162 597.062 827.304C598.204 828.447 599.752 829.089 601.367 829.089H751.145C752.771 829.089 754.332 828.452 755.492 827.311C756.652 826.172 757.318 824.624 757.348 822.999V474.835C757.348 407.165 802.461 359.231 874.643 359.231C953.592 359.231 973.555 424.195 973.555 490.398V822.999C973.555 824.614 974.196 826.162 975.338 827.304C976.48 828.447 978.03 829.089 979.645 829.089H1129.08C1130.71 829.089 1132.27 828.452 1133.43 827.311C1134.59 826.172 1135.26 824.624 1135.29 822.999V470.549C1135.29 458.481 1135.29 446.638 1133.71 435.135C1131.14 397.437 1121.74 360.519 1105.96 326.186Z"
              fill="white"
            />
            <path
              d="M358.093 447.206C358.093 447.206 281.851 429.273 253.768 422.055C225.684 414.837 176.623 399.498 176.623 362.392C176.623 325.286 216.21 313.443 256.362 313.443C296.513 313.443 341.176 323.143 344.672 367.693C344.813 369.299 345.552 370.791 346.742 371.879C347.933 372.965 349.488 373.563 351.1 373.558L498.734 372.994C499.603 372.996 500.463 372.819 501.26 372.474C502.057 372.129 502.774 371.623 503.367 370.987C503.96 370.353 504.416 369.602 504.705 368.783C504.994 367.963 505.113 367.093 505.05 366.226C495.915 223.668 370.837 172.69 255.459 172.69C118.652 172.69 18.6132 262.917 18.6132 362.392C18.6132 435.025 39.1399 503.147 200.533 550.516C228.842 558.749 267.302 569.463 300.912 578.825C341.288 590.104 363.055 607.134 363.055 633.976C363.055 665.104 317.942 686.758 273.618 686.758C209.444 686.758 163.879 662.961 160.157 620.215C159.963 618.652 159.202 617.212 158.016 616.172C156.831 615.132 155.305 614.564 153.728 614.576L6.43255 615.253C5.569 615.253 4.71432 615.426 3.91928 615.764C3.12425 616.101 2.40528 616.594 1.80527 617.216C1.20527 617.836 0.736446 618.572 0.426968 619.378C0.11749 620.185 -0.0263401 621.045 0.00395994 621.908C6.77099 756.459 136.698 828.978 257.829 828.978C438.283 828.978 519.825 727.474 519.825 632.397C520.051 587.734 509.787 486.003 358.093 447.206Z"
              fill="white"
            />
            <path
              d="M2257.37 206.409C2182.38 206.409 2119.55 247.913 2079.06 297.991V212.274C2079.06 210.678 2078.43 209.145 2077.31 208.007C2076.21 206.868 2074.68 206.213 2073.08 206.185H1933.01C1931.4 206.185 1929.84 206.825 1928.7 207.967C1927.56 209.11 1926.91 210.66 1926.91 212.274V1013.04C1926.95 1014.63 1927.61 1016.16 1928.75 1017.27C1929.89 1018.39 1931.42 1019.02 1933.01 1019.02H2082.9C2084.48 1019.02 2086 1018.39 2087.12 1017.27C2088.24 1016.15 2088.87 1014.62 2088.87 1013.04V749.802H2091.13C2114.92 786.117 2180 829.653 2265.05 829.653C2424.96 829.653 2558.28 697.019 2558.28 517.806C2558.4 345.811 2425.76 206.409 2257.37 206.409ZM2243.5 677.057C2211.94 677.841 2180.83 669.2 2154.2 652.238C2127.57 635.274 2106.58 610.759 2093.93 581.82C2081.29 552.88 2077.55 520.829 2083.21 489.757C2088.85 458.685 2103.64 430.002 2125.66 407.369C2147.69 384.733 2175.96 369.175 2206.87 362.679C2237.77 356.183 2269.91 359.042 2299.18 370.893C2328.46 382.743 2353.53 403.048 2371.22 429.215C2388.9 455.383 2398.38 486.224 2398.47 517.806C2398.79 538.449 2395.03 558.955 2387.42 578.145C2379.81 597.335 2368.47 614.831 2354.07 629.628C2339.68 644.425 2322.5 656.232 2303.51 664.371C2284.54 672.511 2264.15 676.821 2243.5 677.057Z"
              fill="white"
            />
            <path
              d="M1483.34 171.229C1343.6 171.229 1273.9 218.711 1217.95 256.72L1216.26 257.847C1213.38 259.821 1211.35 262.813 1210.57 266.221C1209.8 269.63 1210.34 273.204 1212.09 276.231L1267.35 371.419C1268.39 373.201 1269.81 374.732 1271.5 375.901C1273.2 377.071 1275.13 377.852 1277.17 378.187C1279.16 378.546 1281.2 378.459 1283.15 377.932C1285.1 377.405 1286.91 376.454 1288.45 375.141L1292.84 371.533C1321.6 347.397 1367.73 315.14 1479.39 306.343C1541.53 301.382 1595.22 317.622 1634.8 354.615C1678.34 394.767 1704.4 459.617 1704.4 528.077C1704.4 654.057 1630.18 733.23 1510.97 734.81C1412.73 734.246 1346.75 683.042 1346.75 607.364C1346.75 567.212 1364.91 541.047 1400.33 514.881C1403.03 512.947 1404.94 510.1 1405.71 506.866C1406.48 503.632 1406.05 500.229 1404.5 497.287L1354.87 403.45C1353.96 401.771 1352.72 400.289 1351.23 399.089C1349.74 397.889 1348.03 396.995 1346.19 396.458C1344.31 395.899 1342.34 395.741 1340.4 395.992C1338.45 396.245 1336.58 396.903 1334.91 397.925C1279.2 430.97 1210.85 491.422 1214.57 607.59C1219.08 755.449 1342.02 868.345 1501.83 872.97H1509.84H1520.78C1710.7 866.766 1847.85 725.787 1847.85 534.619C1847.85 359.126 1719.95 171.229 1483.34 171.229Z"
              fill="white"
            />
            <path
              d="M3148.93 261.455H3053.73C3051.51 261.484 3049.37 262.385 3047.79 263.964C3046.2 265.544 3045.3 267.679 3045.29 269.914V469.653C3045.3 471.878 3046.21 473.999 3047.8 475.561C3049.38 477.123 3051.51 478 3053.73 478H3148.93C3206.9 478 3249.65 432.322 3249.65 369.727C3249.65 307.132 3206.9 261.455 3148.93 261.455Z"
              fill="white"
            />
            <path
              d="M3441.38 614.802C3441.38 643.787 3465.85 659.915 3508.48 659.915C3566.45 659.915 3600.73 628.561 3600.73 572.958V556.944L3513.9 561.455C3468.1 563.71 3441.38 582.772 3441.38 614.802Z"
              fill="white"
            />
            <path
              d="M4146.27 2.04983H2867.3C2846.33 2.04981 2825.54 6.18442 2806.17 14.2172C2786.78 22.25 2769.17 34.0237 2754.35 48.8653C2739.51 63.707 2727.75 81.3258 2719.73 100.715C2711.7 120.104 2707.59 140.883 2707.61 161.865V862.026C2707.61 904.392 2724.43 945.025 2754.38 974.992C2784.33 1004.96 2824.95 1021.81 2867.3 1021.84H4146.27C4167.28 1021.9 4188.1 1017.82 4207.53 1009.83C4226.95 1001.84 4244.61 990.093 4259.5 975.273C4274.37 960.45 4286.2 942.839 4294.28 923.445C4302.35 904.052 4306.51 883.258 4306.55 862.252V162.09C4306.58 141.042 4302.47 120.192 4294.43 100.74C4286.39 81.2884 4274.58 63.6179 4259.69 48.7448C4244.8 33.8719 4227.11 22.0899 4207.65 14.0763C4188.19 6.06265 4167.33 1.97545 4146.27 2.04983ZM3153.77 556.609H3053.17C3050.93 556.609 3048.79 557.499 3047.19 559.085C3045.61 560.672 3044.71 562.824 3044.71 565.068V708.302C3044.71 710.545 3043.82 712.697 3042.24 714.283C3040.65 715.87 3038.5 716.761 3036.26 716.761H2965.42C2963.2 716.732 2961.05 715.831 2959.47 714.25C2957.89 712.672 2957.01 710.537 2956.97 708.302V191.639C2956.97 189.397 2957.86 187.245 2959.46 185.658C2961.04 184.072 2963.18 183.181 2965.42 183.181H3153.77C3260.47 183.181 3336.82 260.889 3336.82 369.951C3336.82 479.013 3261.03 556.833 3154.35 556.833L3153.77 556.609ZM3683.86 708.19C3683.88 709.31 3683.68 710.421 3683.25 711.461C3682.83 712.5 3682.21 713.447 3681.43 714.244C3680.63 715.041 3679.7 715.675 3678.66 716.107C3677.64 716.538 3676.52 716.761 3675.4 716.761H3608.52C3607.4 716.761 3606.29 716.538 3605.26 716.107C3604.22 715.675 3603.28 715.041 3602.5 714.244C3601.72 713.447 3601.09 712.5 3600.68 711.461C3600.26 710.421 3600.05 709.31 3600.07 708.19V692.739C3600.17 691.382 3599.85 690.026 3599.12 688.874C3598.41 687.72 3597.34 686.829 3596.06 686.334C3594.8 685.84 3593.41 685.769 3592.1 686.131C3590.77 686.491 3589.62 687.266 3588.79 688.34C3568.82 710.107 3536.34 725.896 3484.57 725.896C3408.34 725.896 3357.91 686.197 3357.91 617.624C3357.18 600.904 3360.63 584.265 3367.96 569.216C3375.28 554.17 3386.26 541.19 3399.88 531.458C3427.39 510.818 3470.02 500.104 3533.29 497.622L3600.39 495.367V475.741C3600.39 436.154 3573.78 419.35 3531.03 419.35C3488.29 419.35 3461.33 434.463 3455.03 459.163C3454.52 460.907 3453.45 462.433 3451.97 463.496C3450.51 464.56 3448.72 465.098 3446.9 465.027H3380.7C3379.48 465.058 3378.27 464.82 3377.15 464.334C3376.05 463.846 3375.04 463.12 3374.23 462.206C3373.43 461.291 3372.83 460.214 3372.49 459.044C3372.14 457.875 3372.05 456.646 3372.24 455.441C3382.17 396.793 3430.66 352.243 3534.09 352.243C3643.94 352.243 3683.52 403.335 3683.52 500.892L3683.86 708.19ZM4100.49 372.995L3951.62 770.108C3917.78 862.364 3858.56 886.05 3793.71 886.05C3781.5 886.348 3769.3 884.866 3757.51 881.652C3755.67 881.157 3754.06 880.073 3752.88 878.563C3751.73 877.056 3751.1 875.208 3751.08 873.305V812.965C3751.08 811.703 3751.35 810.455 3751.88 809.311C3752.42 808.167 3753.19 807.154 3754.16 806.347C3755.14 805.538 3756.27 804.955 3757.49 804.637C3758.71 804.319 3759.99 804.274 3761.23 804.506C3771.46 806.446 3781.84 807.428 3792.25 807.44C3810.18 808.339 3827.9 803.193 3842.57 792.825C3857.22 782.457 3867.98 767.467 3873.11 750.258L3877.52 736.385C3878.2 734.529 3878.2 732.491 3877.52 730.633L3738.33 373.109C3737.91 371.831 3737.79 370.469 3737.99 369.137C3738.2 367.804 3738.71 366.537 3739.47 365.439C3740.26 364.341 3741.29 363.442 3742.48 362.814C3743.67 362.187 3745 361.849 3746.34 361.83H3814.02C3815.75 361.847 3817.43 362.381 3818.86 363.367C3820.29 364.351 3821.39 365.741 3822.02 367.357L3916.54 619.542C3917.17 621.189 3918.27 622.608 3919.72 623.609C3921.18 624.612 3922.89 625.147 3924.66 625.147C3926.41 625.147 3928.15 624.612 3929.59 623.609C3931.04 622.608 3932.16 621.189 3932.77 619.542L4014.78 368.034C4015.32 366.319 4016.41 364.825 4017.87 363.77C4019.33 362.714 4021.08 362.153 4022.88 362.169H4092.26C4093.59 362.163 4094.91 362.475 4096.12 363.073C4097.31 363.673 4098.36 364.545 4099.16 365.62C4099.96 366.695 4100.49 367.942 4100.72 369.263C4100.96 370.582 4100.88 371.938 4100.49 373.221V372.995Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="4317"
                height="1036.76"
                fill="white"
                transform="translate(0 0.240234)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div class="relative my-4">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="px-4 bg-white text-sm font-medium text-gray-500">
            or
          </span>
        </div>
      </div>

      <div className="flex justify-center mb-2">
        <button
          onClick={handleCheckoutRedirect}
          className="block text-base font-medium text-[#5931f5] hover:black"
        >
          Continue to checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutActions;
