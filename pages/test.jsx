import axios from 'axios';
export default function Page() {
  axios
    .get('https://api.whalespace.io/oauth2/v1/userinfo', {
      headers: {
        Authorization: `Bearer /UsQYlJnYGXw7J3NgXikd4f8AnGwuxMYpJTOePip+XTcRYny5VkixfjMhI/Ss1diEfe7AJZ5AJA9lgQwMO9RNdn+d1XZfk3c8V5kL5klzLeE7dELsd8bFDMmRwVb5Yhdn/nSmk89gO0wjzHlBYOTi1v4TFTbe/Bnk+z0yjxQ105d81R1IJG9GwwjCIhdv9g28xLbvUHdP/giUlCLPl5fCNHlMehkTUcWHuwGIV9/Vg2eEewk9TRClEOhqdupK1uW47kJL5kKetfqF0Chgmhf+Qn3z7bPAvN2cKyvEqMeUSJ/HOwnv1qi8r57I/srY+3s/LQoF4/v56XZ4o3ZD4hMbHj4wHKgytNpCjWfkOzTwrB7f9+BIdq92SWREPBGeWIVNy3dNybAOAIhZaLM5FfZVxf/A4BUHavlN6o2pIT4I9auVni31vRCnh5mWO7F9/NiwL2I1HLdf8pf1PRcPMucTpsW/c8fd9kdSiPe6nYNByBL5ujmgrcIAVhWYvYdl+gxzs9vzgNVIdJuhmcCg+Y2Yvwybd0ZBG0KEgIsUuqtvlpPlrRsbNTR6pOoJvq79Al1/xryR9yz3YRE56VWafE53EOcngDCngbD+SushVUkQAkBdwnBYftb1abdxvnGrus5LnCj1MAnTluWcOvovzWrwLQeXpBHXWPloyPoymfdYXuryVrB9KJ4nei0xGmM7qBxsBgUXxRzNM+xiDuPfP2mEtLmtdDpIf8bxw91O8IS7RJHXJ8LW/zlbDp/+DPY05TGtWtMEHSXt4TYMKLUbjZySsRwMFKZcB5VlX6ItJLtd0C5TMO4y1oqT+WFZAe6/Hp6EuBGKDtW3w8t0Dy0m66NGnTPGe45B+m4YVabvAOSqnYEfEVJPGpn+DOzodtsAm30`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <>Test For Whale Login</>;
}
