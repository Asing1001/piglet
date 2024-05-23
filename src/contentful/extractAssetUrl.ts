const extractAssetUrl = (asset: any) => {
  return `https:${asset?.fields.file?.url}`;
};

export { extractAssetUrl };
