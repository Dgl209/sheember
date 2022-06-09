import React, { useEffect } from 'react';
import { GroupList, SearchField, List } from '../../components/common';
import { useForm } from 'react-hook-form';
import { Ad } from '../../components/ui';
import { useAds, useMainCategories } from '../../hooks';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { ads } = useAds();
  const AdsList = List(Ad);

  const { loading, fetchMainCategories, mainCategories } = useMainCategories();

  useEffect(() => {
    fetchMainCategories();
  }, []);

  const onSubmit = (data) => console.log('search: ', data);

  const handleMainCategoriesList = ({ id }) => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className="relative container mx-auto flex">
      <div className="w-[26%]">
        <div className="border-r border-gray-200 dark:border-gray-600 pt-6">
          {!loading && <GroupList items={mainCategories} onClick={handleMainCategoriesList} />}
        </div>
      </div>
      <div className="w-full pt-6">
        <div className="w-full max-w-2xl mx-auto mb-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <SearchField
              register={register}
              type="search"
              id="search"
              placeholder="I search..."
              options={{ required: true }}
            />
          </form>
        </div>
        <div className="px-2">
          <AdsList items={ads} columns="4" />
        </div>
      </div>
    </div>
  );
}

export default Main;
