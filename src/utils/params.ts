type Params = {
  paramsList: string;
  paramsNameAppend: string;
  splitparams: string;
}

const $urlParams = ({paramsList, splitparams, paramsNameAppend}: Params) => {
  const params = new URLSearchParams()

  for(const item of paramsList.split(splitparams)) {
    params.append(paramsNameAppend, item)
  }

  return params;
};
