import QRCode from "react-qr-code";
import { Link } from "react-router";
import { Image, Button } from "@nextui-org/react";
function Ticket() {
    const data = {
        id: "15484-64544-564Dc45"
    }
    return (
        <div className="text-white flex flex-col gap-4 items-center justify-center pl-2">

            <section className="w-5/6 h-fit items-center justfify-center flex flex-col gap-4">
                <QRCode
                    size={400}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={``}
                    viewBox={`0 0 256 256`}
                />
                <h2 className="text-lg font-infinity font-regular">
                    15484-64544-564Dc45
                </h2>
            </section>

            <section className="flex flex-col gap-8">
                <div className="flex flex-row items-center justify-start gap-8">
                    <Image src={"https://m.media-amazon.com/images/M/MV5BZDU0YTI5ODAtN2NmMS00YTg3LTgyNDItN2RmOWEzOTkzZjcyXkEyXkFqcGc@._V1_SX300.jpg"} width={150} height={200} className="aspect-auto" />

                    <div className="flex flex-col gap-4">
                        <h3 className="font-infinity font-medium text-lg">
                            The Wild Robot
                        </h3>
                        <p className="flex flex-row flex-wrap pr-2 gap-2 font-fabio font-medium">
                            <span>
                                31.12.2025                            </span>
                            <span> 12:00 AM

                            </span>
                            <span>
                                Sun
                            </span>

                        </p>
                    </div>
                </div>

                <p className="flex flex-col pr-2 gap-2 font-fabio font-medium text-lg pl-[20%]">
                    <span>
                        Full Name: Shivam Sharma
                    </span>
                    <span>
                        ID: 291298
                    </span>

                </p>
            </section>

            <section className="flex flex-col gap-4 w-full items-end justify-center pr-4">
                              <div className="flex flex-col gap-2 items-stretch justify-end">
                    <Button
                        className={"bg-secondaryBlack text-lg w-56 h-24 flex flex-col gap-2"}
                        radius={"md"}
                        as={Link}
                        color="primary"
                        href="https://github.com/nextui-org/nextui"
                        variant="solid"
                    >
                        <span>  Add To</span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={180}
                                height={25}
                                viewBox="0 0 258 36"
                                fill="none"
                            >
                                <path
                                    d="M168.699 4.43218H171.8L176.088 21.7847L176.484 23.4012H176.616L177.111 21.7847L182.389 4.43218H185.292L190.34 21.7847L190.835 23.4012H190.967L195.618 4.43218H198.719L192.352 28.0528H189.449L184.435 10.9641L183.907 9.11672H183.775L183.214 10.9641L178.002 28.0528H175.099L168.699 4.43218Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M205.327 28.5806C204.14 28.5806 203.062 28.3497 202.094 27.8879C201.149 27.4041 200.4 26.7443 199.851 25.9085C199.323 25.0507 199.059 24.094 199.059 23.0384C199.059 21.3009 199.707 19.9484 201.006 18.9806C202.325 18.013 204.008 17.5291 206.053 17.5291C207.064 17.5291 207.978 17.6391 208.791 17.859C209.604 18.079 210.254 18.3208 210.738 18.5847V17.727C210.738 16.9353 210.528 16.2316 210.111 15.6157C209.715 14.978 209.176 14.494 208.494 14.1641C207.813 13.8123 207.076 13.6363 206.284 13.6363C204.415 13.6363 202.985 14.395 201.995 15.9126L199.653 14.3621C200.334 13.3504 201.236 12.5697 202.358 12.0198C203.48 11.4481 204.745 11.162 206.152 11.162C208.395 11.162 210.165 11.7669 211.463 12.9765C212.761 14.1862 213.41 15.8136 213.41 17.859V28.0528H210.738V25.6446H210.606C210.078 26.4803 209.363 27.1842 208.461 27.7559C207.559 28.3058 206.515 28.5806 205.327 28.5806ZM205.558 26.1064C206.437 26.1064 207.274 25.8755 208.065 25.4136C208.857 24.9518 209.495 24.325 209.979 23.5332C210.485 22.7415 210.738 21.8837 210.738 20.96C209.505 20.1683 208.087 19.7724 206.482 19.7724C205.096 19.7724 203.986 20.0914 203.15 20.7291C202.337 21.345 201.929 22.1367 201.929 23.1043C201.929 23.9842 202.292 24.7099 203.018 25.2817C203.744 25.8316 204.59 26.1064 205.558 26.1064Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M217.251 4.43218H220.055V28.0528H217.251V4.43218Z"
                                    fill="#5F6368"
                                />
                                <path d="M224.146 4.43218H226.95V28.0528H224.146V4.43218Z" fill="#5F6368" />
                                <path
                                    d="M238.169 28.5806C236.586 28.5806 235.167 28.2069 233.914 27.459C232.683 26.7113 231.715 25.6775 231.01 24.358C230.308 23.0384 229.955 21.5429 229.955 19.8713C229.955 18.2878 230.285 16.8363 230.945 15.5167C231.604 14.1752 232.539 13.1195 233.749 12.3497C234.981 11.5579 236.388 11.162 237.971 11.162C239.555 11.162 240.94 11.5249 242.128 12.2507C243.339 12.9545 244.262 13.9553 244.899 15.2528C245.537 16.5504 245.856 18.046 245.856 19.7394C245.856 20.0473 245.834 20.2672 245.79 20.3992H232.792C232.836 21.6308 233.133 22.6755 233.683 23.5332C234.233 24.369 234.915 24.9958 235.728 25.4136C236.564 25.8316 237.422 26.0404 238.301 26.0404C240.37 26.0404 241.963 25.0288 243.085 23.0054L245.559 24.193C244.856 25.5126 243.877 26.5793 242.623 27.393C241.392 28.1848 239.908 28.5806 238.169 28.5806ZM242.887 18.0569C242.844 17.3971 242.656 16.7373 242.326 16.0775C241.996 15.4177 241.458 14.8569 240.709 14.395C239.984 13.9332 239.05 13.7023 237.905 13.7023C236.675 13.7023 235.608 14.0981 234.705 14.8899C233.805 15.6816 233.232 16.7373 232.99 18.0569H242.887Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M254.835 28.3167C254.175 28.3167 253.56 28.2069 252.987 27.9868C252.438 27.7669 251.965 27.47 251.569 27.0961C251.129 26.6783 250.799 26.1945 250.579 25.6445C250.381 25.0728 250.282 24.402 250.282 23.6322V14.2301H247.379V11.6899H250.282V6.80744H253.053V11.6899H257.078V14.2301H253.053V22.9394C253.053 23.8631 253.24 24.545 253.614 24.9848C253.989 25.4687 254.559 25.7105 255.33 25.7105C256.011 25.7105 256.605 25.5566 257.111 25.2487V27.9538C256.76 28.0858 256.418 28.1739 256.088 28.2178C255.78 28.2837 255.363 28.3167 254.835 28.3167Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M70.5894 28.3774C63.3067 28.3774 57.1914 22.4731 57.1914 15.2106C57.1914 7.94816 63.3067 2.04395 70.5894 2.04395C74.6199 2.04395 77.483 3.62394 79.6233 5.67519L77.066 8.22537C75.5093 6.78396 73.4247 5.64746 70.5616 5.64746C65.2524 5.64746 61.0829 9.91618 61.0829 15.2106C61.0829 20.505 65.2247 24.7738 70.5616 24.7738C74.0084 24.7738 75.982 23.3879 77.2328 22.1405C78.2613 21.1149 78.9284 19.6457 79.2063 17.6223H70.4782V14.0187H82.7087C82.8477 14.6562 82.9033 15.4324 82.9033 16.264C82.9033 18.9528 82.1528 22.3068 79.7901 24.6907C77.4552 27.1023 74.5087 28.3774 70.5894 28.3774Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M101.22 19.8969C101.22 24.7755 97.3837 28.379 92.6861 28.379C87.9885 28.379 84.1525 24.7755 84.1525 19.8969C84.1525 14.9906 87.9885 11.4148 92.6861 11.4148C97.3837 11.4148 101.22 14.9906 101.22 19.8969ZM97.4949 19.8969C97.4949 16.8478 95.2711 14.7688 92.7138 14.7688C90.1565 14.7688 87.9328 16.8478 87.9328 19.8969C87.9328 22.9183 90.1565 25.0249 92.7138 25.0249C95.2711 25.0249 97.4949 22.9183 97.4949 19.8969Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M119.792 19.8954C119.792 24.774 115.956 28.3777 111.258 28.3777C106.561 28.3777 102.725 24.774 102.725 19.8954C102.725 14.9891 106.561 11.4133 111.258 11.4133C115.956 11.4133 119.792 14.9891 119.792 19.8954ZM116.039 19.8954C116.039 16.8463 113.815 14.7674 111.258 14.7674C108.701 14.7674 106.477 16.8463 106.477 19.8954C106.477 22.9169 108.701 25.0236 111.258 25.0236C113.815 25.0236 116.039 22.9169 116.039 19.8954Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M137.522 27.1579C137.522 33.4225 133.825 36.0005 129.434 36.0005C125.32 36.0005 122.846 33.2285 121.901 30.9833L125.153 29.625C125.737 31.011 127.154 32.6464 129.434 32.6464C132.241 32.6464 133.964 30.9001 133.964 27.6569V26.4373H133.825C132.992 27.4629 131.379 28.3777 129.35 28.3777C125.097 28.3777 121.206 24.691 121.206 19.9233C121.206 15.1277 125.097 11.4133 129.35 11.4133C131.379 11.4133 132.992 12.3003 133.825 13.2983H133.964V11.9123H137.522V27.1579ZM134.242 19.9233C134.242 16.9295 132.241 14.7397 129.712 14.7397C127.126 14.7397 124.986 16.9295 124.986 19.9233C124.986 22.8892 127.154 25.0236 129.712 25.0236C132.241 25.0236 134.242 22.8892 134.242 19.9233Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M143.945 2.93339V27.8531H140.221V2.93339H143.945Z"
                                    fill="#5F6368"
                                />
                                <path
                                    d="M158.426 22.6968L161.317 24.6372C160.372 26.0232 158.12 28.4071 154.229 28.4071C149.392 28.4071 145.807 24.6926 145.807 19.9248C145.807 14.88 149.448 11.4427 153.812 11.4427C158.232 11.4427 160.372 14.9354 161.095 16.848L161.484 17.8182L150.115 22.5028C150.977 24.1937 152.338 25.0807 154.229 25.0807C156.119 25.0252 157.453 24.1105 158.426 22.6968ZM149.504 19.6477L157.092 16.4877C156.674 15.4344 155.424 14.6859 153.923 14.6859C152.033 14.6859 149.392 16.3769 149.504 19.6477Z"
                                    fill="#5F6368"
                                />
                                <rect
                                    x={0.988281}
                                    y={0.495117}
                                    width={39.0657}
                                    height={33.9565}
                                    fill="url(#pattern0)"
                                />
                                <defs>
                                    <pattern
                                        id="pattern0"
                                        patternContentUnits="objectBoundingBox"
                                        width={1}
                                        height={1}
                                    >
                                        <use
                                            xlinkHref="#image0_714_332"
                                            transform="scale(0.00201207 0.00231482)"
                                        />
                                    </pattern>
                                    <image
                                        id="image0_714_332"
                                        width={497}
                                        height={432}
                                        xlinkHref="data:image/png;base64,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"
                                    />
                                </defs>
                            </svg>

                        </span>
                    </Button>

                    <Button
                        className={"bg-secondaryBlack text-lg w-48 self-end h-16 font-medium font-infinity  text-xl"}
                        radius={"md"}
                        as={Link}
                        color="primary"
                        href="https://github.com/nextui-org/nextui"
                        variant="solid"
                    >
                        Download PDF
                    </Button>
                    <Button
                        className={"bg-secondaryBlack text-lg w-48 self-end h-16 font-medium font-infinity  text-xl"}
                        radius={"md"}
                        as={Link}
                        color="primary"
                        href="https://github.com/nextui-org/nextui"
                        variant="solid"
                    >
                        Take Screenshot
                    </Button>


                </div>
  <p className="flex flex-col gap-2 font-fabio font-medium whitespace-nowrap  mt-4 text-center self-center">
                    Show QR Code At Entry
                </p>

            </section>


        </div>
    )
}

export default Ticket

