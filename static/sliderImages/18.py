import os
path = './'
i = 1

for file_name in os.listdir(path):
    base_name, ext = os.path.splitext(file_name)

    ads_file_name = os.path.join(path, file_name)
    
    new_abs_file_name = os.path.join(path,str(i)+ext)
    os.rename(ads_file_name, new_abs_file_name)
    i+=1